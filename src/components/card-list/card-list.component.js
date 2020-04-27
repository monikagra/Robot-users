import React from "react";
import Card from "../card/card.component.js";
import "./card-list.styles.css";

export const CardList = props => {
  const user = props.users.map(user => <Card key={user.id} user={user} />);

  return <div className="card-list">{user}</div>;
};
