import express from "express";
import AllContacts from "../Model/ContactModel.js";

export const ContactRoutes = express.Router();

ContactRoutes.get("/", async (req, res) => {
  try {
    const response = await AllContacts.find();
    res.status(200).send({ status: 200, message: "success", data: response });
  } catch (error) {
    res.status(400).send({ status: 400, message: "Something went wrong.." });
  }
});

ContactRoutes.post("/addcontact", async (req, res) => {
  try {
    const data = await req.body;
    const response = await AllContacts.create(data);
    res
      .status(200)
      .send({ status: 200, message: "Add Data Successfully", data: response });
  } catch (error) {
    res.status(400).send({ status: 400, message: "Something went wrong.." });
  }
});

ContactRoutes.delete("/deletecontact/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await AllContacts.findByIdAndDelete(id);
    res
      .status(200)
      .send({
        status: 200,
        message: "Deleted Data Successfully",
        data: response,
      });
  } catch (error) {
    res.status(400).send({ status: 400, message: "Something went wrong.." });
  }
});

ContactRoutes.put("/updatecontact/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const response = await AllContacts.findByIdAndUpdate(id, data);
    res
      .status(200)
      .send({
        status: 200,
        message: "Update Data Successfully",
        data: response,
      });
  } catch (error) {
    res.status(400).send({ status: 400, message: "Something went wrong.." });
  }
});
