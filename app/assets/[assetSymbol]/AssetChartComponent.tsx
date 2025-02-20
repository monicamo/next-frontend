'use client';

import { useRef } from "react";
import {
  ChartComponent,
  ChartComponentRef,
} from "../../components/ChartComponent";
import { AssetShow } from "@/app/components/AssetShow";
import { Asset } from "@/app/model/model";

export function AssetChartComponent(props: { asset: Asset }) {
  const chartRef = useRef<ChartComponentRef>(null);
  //websocket

  return (
    <ChartComponent ref={chartRef} header={<AssetShow asset={props.asset} />} />
  );
}