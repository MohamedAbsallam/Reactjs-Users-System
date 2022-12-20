import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

export default function UsersForm(props) {

    const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required()
    })

    return(
        <div>
            <Formik
                enableReinitialize={true}
                initialValues={props.values}
                onSubmit={props.onSubmit}
                validationSchema={schema}
                render={props => {
                    return(
                        <div className='container'>
                        <Form>
                            <div className='mb-3'>
                            <label className="form-label">Name: </label>
                            <Field className='form-control' type='text' name='name'/>
                            <ErrorMessage name='name'/> <br/>
                            </div>

                            <div className='mb-3'>
                            <label className="form-label">Email: </label>
                            <Field className='form-control' type='email' name='email'/>
                            <ErrorMessage name='email'/> <br/>
                            </div>

                            <button className="btn btn-primary"type='submit'>Send</button>
                        </Form>
                        </div>
                    )
                }}
            />
        </div>
    )
}