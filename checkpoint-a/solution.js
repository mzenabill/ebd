// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a


import { findAllOrders, findOrderById } from "./orders-db.js";

export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter(o => o.city === "Alexandria" && o.status === "pending");
}

export function summarize(orders) {
  if (orders.length === 0) return 0;
  return orders.reduce((max, o) => (o.price > max ? o.price : max), 0);
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.item} x${order.quantity} ordered by ${order.student}`;
  } catch (error) {
    return `Missing order: ${id}`;
  }
}

export function toJsonLines(orders) {
  const simplified = orders.map(o => ({
    item: o.item,
    price: o.price
  }));
  return JSON.stringify(simplified);
}

