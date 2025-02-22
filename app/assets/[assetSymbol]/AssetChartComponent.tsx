'use client';

import { useEffect, useRef } from "react";
import {
  ChartComponent,
  ChartComponentRef,
} from "../../components/ChartComponent";
import { AssetShow } from "@/app/components/AssetShow";
import { Asset } from "@/app/model/model";
import { Time } from "lightweight-charts";
import { socket } from "@/app/socket-io";


export function AssetChartComponent(props: {
  asset: Asset;
  data?: { time: Time; value: number }[];
}) {
  const chartRef = useRef<ChartComponentRef>(null);
  const symbol = props.asset.symbol;

  useEffect(() => {
    socket.connect();
    socket.emit("joinAsset", { symbol });
    socket.on('assets/daily-created', (assetDaily) => {
      console.log(assetDaily);
      chartRef.current?.update({
        time: (Date.parse(assetDaily.date) / 1000) as Time,
        value: assetDaily.price,
      })
    });
  }, [symbol]);

  return (
    <ChartComponent
      ref={chartRef}
      header={<AssetShow asset={props.asset} />}
      data={props.data}
    />
  );
}