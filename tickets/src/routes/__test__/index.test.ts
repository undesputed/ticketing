import request from "supertest";
import { app } from "../../app";

const createTicker = () => {
  return request(app).post("/api/tickets").set("Cookie", global.signin()).send({
    title: "wasedrf",
    price: 20,
  });
};

it("Can fetch a list of tickets", async () => {
  await createTicker();
  await createTicker();
  await createTicker();

  const response = await request(app).get("/api/tickets").send().expect(200);

  expect(response.body.length).toEqual(3);
});
