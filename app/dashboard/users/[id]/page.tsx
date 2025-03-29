import React from "react";

const UserDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div className="text-3xl">User Details {id}</div>;
};

export default UserDetails;
