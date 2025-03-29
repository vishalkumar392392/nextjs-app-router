import React from "react";

const UserDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return <div className="text-3xl">User Details {id}</div>;
};

export default UserDetails;
