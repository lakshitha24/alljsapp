import supertest from "supertest";
const baseURL = "http://localhost:3001";

describe("GET/employe", () => {
  it("shoud return 200", async () => {
    const response = await supertest(baseURL).get("/api/get/employee");
    expect(response.statusCode).toBe(201);
  });
  it("should return employe", async () => {
    const response = await supertest(baseURL).get("/api/get/employee");
    expect(response.body.length >= 1).toBe(true);
  });
});

describe("POST/employe", () => {
  const employeeData = {
    first_name: "Theodore",
    last_name: "Benjamin",
    email: "amal_perera@gmail.com",
    number: "+94764567898",
    gender: "M",
    photo: "eeeeeeeeeeee",
  };
  afterAll(async () => {
    const response = await supertest(baseURL).get("/api/get/employee");
    const lastItem = response.body[response.body.length - 1];
    await supertest(baseURL).delete(`/api/deleteEmploye/${lastItem._id}`);
  });
  it("should add an employe to DB", async () => {
    const response = await supertest(baseURL)
      .post("/api/create/employe/")
      .send(employeeData);
    expect(response.statusCode).toBe(201);
  });
});

describe("PUT/employe", () => {
  const employeeData = {
    first_name: "Theodore",
    last_name: "Benjamin",
    email: "amal_perera@gmail.com",
    number: "+94764567898",
    gender: "M",
    photo: "eeeeeeeeeeee",
  };
  beforeAll(async () => {
    await supertest(baseURL).post("/api/create/employe/").send(employeeData);
  });
  afterAll(async () => {
    const response = await supertest(baseURL).get("/api/get/employee");
    const lastItem = response.body[response.body.length - 1];
    await supertest(baseURL).delete(`/api/deleteEmploye/${lastItem._id}`);
  });
  it("should update item if it exists", async () => {
    const newResponse = await supertest(baseURL).get("/api/get/employee");
    const lastItem = newResponse.body[newResponse.body.length - 1];
    const response = await supertest(baseURL)
      .put(`/api/updateEmploye/${lastItem._id}`)
      .send({
        gender: "F",
      });
    expect(response.statusCode).toBe(200);
  });
});

describe("DELELE/employe", () => {
  const employeeData = {
    first_name: "Theodore",
    last_name: "Benjamin",
    email: "amal_perera@gmail.com",
    number: "+94764567898",
    gender: "M",
    photo: "eeeeeeeeeeee",
  };
  beforeAll(async () => {
    await supertest(baseURL).post("/api/create/employe/").send(employeeData);
  });
  it("should delete one item", async () => {
    const newResponse = await supertest(baseURL).get("/api/get/employee");
    const lastItem = newResponse.body[newResponse.body.length - 1];
    const response = await supertest(baseURL).delete(`/api/deleteEmploye/${lastItem._id}`);
    const employee = newResponse.body;
    const exists = employee.find((employe:any) => {
        lastItem._id == employe._id;
    });
    expect(exists).toBe(undefined);
  });
});
