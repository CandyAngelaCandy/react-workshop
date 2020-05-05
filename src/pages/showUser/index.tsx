import React, { memo, useEffect, useState } from "react";
import { UserInfo, getAllUser } from "../../api/user";
import "./index.css";

const ShowUser: React.FC = (): JSX.Element => {
  const [users, setUsers] = useState([] as UserInfo[]);

  useEffect(() => {
    getAllUser().then((res) => {
      setUsers(res.data);
    });
  }, []);
  return (
    <ul className="user-list">
      {users.map((user) => {
        return (
          <li key={user.id} className="user-item">
            <div className="user-name">{user.firstName + user.lastName}</div>
            <div className="user-gender">{user.isMale ? "male" : "female"}</div>
            <div className="user-grade">{user.grade}</div>
            <div className="user-skill">{user.skill}</div>
            <div className="user-province">{user.province}</div>
            <div className="user-city">{user.city}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default memo(ShowUser);
