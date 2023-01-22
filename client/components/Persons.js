import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { FETCH_PERSONS } from "../data/Queries";
import Card from "./Card";
import styles from "./Persons.module.scss";
import { itemsPerPage } from "../lib/globalVars";

function GetUsers() {
  const { error, loading, data } = useQuery(FETCH_PERSONS);
  const [users, setUsers] = useState([]);
  const [listUpto, setListUpto] = useState(itemsPerPage);

  useEffect(() => {
    if (data) {
      setUsers(data.getPeopleData);
    }
  }, [data]);

  const loadMoreData = () => {
    setListUpto((prevData) => prevData + itemsPerPage);
  };

  return (
    <>
      <div className={styles.persons}>
        {users?.slice(0, listUpto).map((item) => {
          return <Card data={item} cardWidth={300} />;
        })}
      </div>
      <div className={styles.more}>
        <button type="submit" onClick={loadMoreData}>
          Load More
        </button>
      </div>
    </>
  );
}

export default GetUsers;
