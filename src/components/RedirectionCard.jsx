import React from "react";

export const RedirectionCard = ({ data }) => {
    return (
        <div className="flex border p-4 rounded-md items-center justify-between">
            <div>{data.id}</div>
            <div>{data.name}</div>
            <div>{data.description}</div>
            <div>{data.urlCode}</div>
            <div>{data.url}</div>
        </div>
    );
};
