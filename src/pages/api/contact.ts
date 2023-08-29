import { MongoClient } from "mongodb";

import type { NextApiRequest, NextApiResponse } from "next";

type TReqBody = { email: string; name: string; message: string };
async function handlerApi(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, name, message }: TReqBody = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    // Store in "MongoDB" Database
    const payload = {
      email,
      name,
      message,
    };

    let client: MongoClient;
    const connectionString = `mongodb+srv://${process.env.db_user}:${process.env.db_password}@${process.env.db_cluster}.2kpyack.mongodb.net/${process.env.db_name}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (err) {
      res.status(500).json({ message: "Couldn't connect to the database." });
      return;
    }

    const db = client.db();
    try {
      await db.collection("messages").insertOne(payload);
    } catch (err) {
      console.error(err);

      client.close();
      res.status(500).json({ message: "Failed to send message!" });
      return;
    }

    client.close();
    res.status(201).json({ message: "Success stored message!", data: payload });
  }
}

export default handlerApi;
