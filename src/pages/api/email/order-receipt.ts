// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
// import { sendEmail } from '@framework/order/email/email-service';
// import { GetEmailBody, GetEmailSubject } from '@framework/order/email/email-template-service';

// export default async  function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== 'POST') {
//     return res.status(405).send({ message: 'Only post request allowed' });
//   }
//   try {
//     const { name, email, lineItems, totalCost, message, orderId } = req.body;

//     //send email to admin
//     const emailSubject = await GetEmailSubject('contact/contact_subject.txt');

//     const data = {
//         name: name,
//         email: email,
//         orderId: orderId,
//         lineItems: lineItems,
//         totalCost: totalCost,
//         message: message
//       }
      

//     const emailBody = await GetEmailBody('contact/contact_body.txt', data);

//     const emailParam = {
//       to: email as string,
//       from: process.env.ADMIN_EMAIL as string,
//       subject: emailSubject,
//       text: emailBody,
//     };

//     sendEmail(emailParam);

//     return res.status(200).json({ message: "Contact Email Sent Successfully" });
//   } catch (err) {
//     const errorMessage = err instanceof Error ? err.message : 'Internal server error';
//     res.status(500).json({ message: errorMessage });
//   }
// }