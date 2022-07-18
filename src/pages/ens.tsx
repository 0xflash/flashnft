import { useState, useEffect } from 'react';
import { Tooltip } from 'antd';
import { createClient } from 'urql';
import { get } from 'lodash';
import dayjs from 'dayjs';

import styles from './ens.less';

const timeLimit = 259200; // 3 day
const gracePeriod = 7776000; // 90 day
const exponentially = 1814400; // 21 day
const graphClient = createClient({
  url: 'https://api.thegraph.com/subgraphs/name/ensdomains/ens',
});

export default function Ens() {
  const [errorMessage, setErrorMessage] = useState('Data is empty');
  const [loading, setLoading] = useState(false);
  const [record, setRecord] = useState([]);
  const [day, setDay] = useState(5);

  const findEns = async () => {
    setRecord([]);
    setLoading(true);
    setErrorMessage('Data is empty');

    const time = (timeLimit / 3) * day;
    const startTime =
      dayjs().endOf('day').unix() - gracePeriod - exponentially - time;
    const endTime =
      dayjs().endOf('day').unix() -
      gracePeriod -
      exponentially +
      timeLimit -
      time;
    try {
      const queryStr = `
        query {
          registrations(
            where: {
              labelName_not: null
              expiryDate_gt: ${startTime} 
              expiryDate_lte: ${endTime}
            }
            orderBy: expiryDate
            orderDirection: desc
          ) {
            domain {
              name
            }
            expiryDate
          }
        }
      `;
      const resp = await graphClient.query(queryStr).toPromise();
      const data = get(resp, 'data.registrations', [])
        .map((i: any) => ({
          expiryDate: i.expiryDate,
          name: get(i, 'domain.name', ''),
        }))
        .filter((i: any) => i.name)
        .sort((a: any, b: any) => a.name.length - b.name.length);
      setRecord(data);
    } catch (e: any) {
      setErrorMessage('Query timed out, Please try again');
    }
    setLoading(false);
  };

  useEffect(() => {
    findEns();
  }, []);

  return (
    <div className={styles.wrap}>
      <h2>Find the forgotten ENS domain</h2>
      <div>
        <p>😍 the carefully selected domain name will be owned by you soon.</p>
        <p>👇 data range: registration is allowed.</p>
      </div>
      <input
        value={day}
        type="number"
        onChange={(e: any) => {
          setDay(e.target.value);
          findEns();
        }}
      />
      <div>
        <div className={styles.record}>
          {record.length > 0 ? (
            record.map((i: any) => (
              <div key={i.name}>
                <Tooltip
                  title={`Allow registration date: ${dayjs(
                    Number(`${Number(i.expiryDate) + gracePeriod}000`),
                  ).format('YYYY-MM-DD HH:mm:ss')} (UTC+08:00)`}
                >
                  <a
                    href={`https://app.ens.domains/name/${i.name}`}
                    target="_blank"
                  >
                    {i.name}
                  </a>
                </Tooltip>
              </div>
            ))
          ) : loading ? (
            <span>
              <span>Loading</span>
              <span className="dotting" />
            </span>
          ) : (
            <span>{errorMessage}</span>
          )}
        </div>
      </div>
    </div>
  );
}
