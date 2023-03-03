const express = require("express")
const router = express.Router();
const nodemailer = require("nodemailer");
const Model = require("../Models/models");
const LeadModel = require("../Models/Leadmodel")

router.post("/", (req, res) => {

    "use strict";
    async function main() {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: "amigosent17@gmail.com",
                pass: "mqrumuvggehvfhlk",
            },
        });
        let info = await transporter.sendMail({
            to: "saquibaowte97.sa@gmail.com",
            html: `    <div
            style="
              font-family: Helvetica, Arial, sans-serif;
              overflow: auto;
              line-height: 2;
            "
          >
            <div style="margin: 30px auto; width: 70%; padding: 10px 0">
              <div style="text-align: center">
                <a
                  href="https://amigosengineers.com"
                  style="
                    font-size: 1.4em;
                    color: #20b1aa;
                    text-decoration: none;
                    font-weight: 600;
                  "
                  >AmigoS Enterprises</a
                >
                <p
                  style="
                    font-size: 1em;
                    text-align: center;
                    background-color: #20b1aa;
                    color: #fff;
                  "
                >
                  New Enquiry Received
                </p>
      
                <p
                  style="
                    text-align: start;
                    font-size: 0.9em;
                    margin-bottom: 8px;
                    font-weight: bold;
                  "
                >
                  Name: ${req.body.name}
                </p>
                <p
                  style="
                    text-align: start;
                    font-size: 0.9em;
                    margin-bottom: 8px;
                    font-weight: bold;
                  "
                >
                  Email: ${req.body.email}
                </p>
                <p
                  style="
                    text-align: start;
                    font-size: 0.9em;
                    margin-bottom: 8px;
                    font-weight: bold;
                  "
                >
                  Mobile Number: ${req.body.mobile}
                </p>
                <p
                  style="
                    text-align: start;
                    font-size: 0.9em;
                    margin-bottom: 8px;
                    font-weight: bold;
                  "
                >
                  Enquiry Details: ${req.body.message}
                </p>
              </div>
              <hr style="margin-top: 10px" />
            </div>
          </div>`,
            subject: `New Enquiry Received From ${req.body.email}`,
        });
    }

    main().then(()=>{
        res.status(200).send('Mail Sent')
    }).catch((err) => {
        console.log(err)
        res.json({ status: 400, message: "some error occured please try again later.." })
    });
})


module.exports = router;