import { app }  from "../index.js";
import { dataBasePassword, verifiedPassword } from "../controller/mocks.js";
import request from "supertest";

test( "Testing verify with no params", async () => {
    const res = await request(app).get("/verify");

    expect(res.body).toEqual("There is no data to show");
})

test("Testing verify password", async () => {
    const res = await request(app).post("/verify").send(dataBasePassword);

    expect(res.body).toEqual(verifiedPassword);
})