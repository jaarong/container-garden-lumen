import React, { useState }  from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Contact = () => {
    
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
          submitting: false,
          status: { ok, msg }
        });
        if (ok) {
          form.reset();
        }
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
          method: "post",
          url: "https://getform.io/f/9468c9cd-2770-4d33-9103-a4dbbe4d150d",
          data: new FormData(form)
        })
          .then(r => {
            handleServerResponse(true, "Thanks!", form);
          })
          .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
        });
    };

    return (

        <Formik
        initialValues={{
            email: 'joe@gardner.com',
            name: 'Joe Dirt',
            message: 'Type your message here',
        }}
        onSubmit={handleonSubmit}
        >

            {({ isSubmitting }) => (

            <Form>
                <div className="form-group block p-5">
                    <label htmlFor="email" className="block pb-2" required="required">Email address</label>
                    <Field className="form-control text-black" type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                </div>
                <div className="form-group block p-5">
                    <label className="block pb-2" htmlFor="name">Name</label>
                    <Field className="form-control text-black" type="text" name="name" />
                    <ErrorMessage name="name" component="div" />
                </div>
                <div className="form-group block p-5">
                    <label className="block pb-2" htmlFor="message">Message</label>
                    <Field className="form-control text-black" type="text" name="message" />
                    <ErrorMessage name="name" component="div" />
                </div>
                <button type="submit" disabled={isSubmitting}>Submit</button>
            </Form>

            )}

        </Formik> 
    );
}

export default Contact;