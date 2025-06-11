import express from "express";

const router = express.Router();


// What is Endpoint?
// An endpoint is a combination of URL + HTTP method that lets the user(aka client) interact with a specific resource

router.get("/", (req, res) => {
  res.status(200).send("You just fetched the notes");
});

router.post("/", (req, res) => {
  res.status(201).json({ message: "Note created successfully!" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: "Note updated successfully!" });
});

router.delete("/:id", (req, res) => {
    res.status(200).json({message: "Note deleted successfully!"})
})

export default router;