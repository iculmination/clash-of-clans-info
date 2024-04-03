import useHttp from "src/hooks/useHttp";
import { useState } from "react";

const useClashApi = () => {
  const API_TOKEN =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImM1NTAyZTJjLTQ5NmUtNDNiMy1iNjdhLTU2NjQ2MGE0YTEwMiIsImlhdCI6MTcxMjE2NjUyNCwic3ViIjoiZGV2ZWxvcGVyLzkwMmQxNzM1LTk3ZWEtNTIxZi1lNTBmLWNhNDQ0MzI5Mjg1MyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjAuMC4wLjAiXSwidHlwZSI6ImNsaWVudCJ9XX0.K5oT9VBYnJZfCuAtyL4qW7yZsVi8BgnigXP07od4xlczFRDcdKeRlfpwLfmAbAMKcvHn4r0PXvtkx5mbRKy49A";
  const headers = { Authorization: "Bearer " + API_TOKEN };

  const [status, setStatus] = useState("waiting");
  const request = useHttp();

  const getPlayer = async (url) => {
    const player = await request(url, { headers });
    return player;
  };
  const getClan = async (url) => {};

  const transformPlayer = (player) => {};

  return { status, setStatus, getPlayer, getClan };
};

export default useClashApi;
