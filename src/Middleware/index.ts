import express, { Router } from "express";

const middleware = async (app:Router) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }))

    return app
};

export { middleware };
