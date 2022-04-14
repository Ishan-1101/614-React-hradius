import React,{useState} from 'react'
import { TextField } from '@mui/material'
import {addData} from './data'
import "./Add.css"

function Add() {
    const [open, setOpen] = useState(false);
    const [rows, setRows] = useState({
        business_code: '', cust_number: '', clear_date: '', buisness_year: '', doc_id: '', posting_date: '', document_create_date: '',
        due_in_date: '', invoice_currency: '', document_type: '', posting_id: '', total_open_amount: '', baseline_create_date: '',
        cust_payment_terms: '', invoice_id: ''
    });
    const { business_code, cust_number, clear_date, buisness_year, doc_id, posting_date, document_create_date,
        due_in_date, invoice_currency, document_type, posting_id, total_open_amount, baseline_create_date,
        cust_payment_terms, invoice_id } = rows;

    const changeHandler = e => {
        setRows({ ...rows, [e.target.name]: [e.target.value] });
    };
    const handleClickOpen = () => {
        setOpen(true);
      };
    const handleClose = () => {
        setOpen(false);
      };
    const submitHandler = async (e) => {
        e.preventDefault()
        let response = await addData(rows)
        handleClose();
    };

    return (
        <div className='add-modal-bg'>
        <div className='modal-add'>
            <p className='add-head'>Add</p>
            <div className='add-modal-content'>
            <div>
                <TextField
                    label='Buisness Code'
                    className='textbox add'
                    variant='standard'
                    size='small'
                    name='business_code'
                    value={business_code}
                    onChange={changeHandler}
                    sx={{ m: 2 }}
                // autoFocus='true'
                />
                <TextField
                    label='Customer Number'
                    className='textbox add'
                    variant='standard'
                    size='small'
                    name='cust_number'
                    value={cust_number}
                    onChange={changeHandler}
                    sx={{ m: 2 }}
                />
                <TextField
                    label='Clear Date'
                    className='textbox add'
                    type={'date'}
                    variant='outlined'
                    size='small'
                    name='clear_date'
                    value={clear_date}
                    onChange={changeHandler}
                    sx={{ m: 2 }}
                />
                <TextField
                    label='Business Year'
                    className='textbox add'
                    variant='standard'
                    size='small'
                    name='buisness_year'
                    value={buisness_year}
                    onChange={changeHandler}
                    sx={{ m: 2 }}
                />
            </div>
            <div>
                <TextField
                    label='Document Id'
                    className='textbox add'
                    variant='standard'
                    size='small'
                    name='doc_id'
                    value={doc_id}
                    onChange={changeHandler}
                    sx={{ m: 2 }}
                />
                <TextField
                    label='Posting Date'
                    className='textbox add'
                    type={'date'}
                    variant='outlined'
                    size='small'
                    name='posting_date'
                    value={posting_date}
                    onChange={changeHandler}
                    sx={{ m: 2 }}
                />
                <TextField
                    label='Document Create Date'
                    className='textbox add'
                    type={'date'}
                    variant='outlined'
                    size='small'
                    name='document_create_date'
                    value={document_create_date}
                    onChange={changeHandler}
                    sx={{ m: 2 }}
                />
                <TextField
                    label='Due Date'
                    className='textbox add'
                    type={'date'}
                    variant='outlined'
                    size='small'
                    name='due_in_date'
                    value={due_in_date}
                    onChange={changeHandler}
                    sx={{ m: 2 }}
                />
            </div>
            <div>
                <TextField
                    label='Invoice Currency'
                    className='textbox add'
                    variant='standard'
                    size='small'
                    name='invoice_currency'
                    value={invoice_currency}
                    onChange={changeHandler}
                    sx={{ m: 2 }}
                />
                <TextField
                    label='Document Type'
                    className='textbox add'
                    variant='standard'
                    size='small'
                    name='document_type'
                    value={document_type}
                    onChange={changeHandler}
                    sx={{ m: 2 }}
                />
                <TextField
                    label='Posting Id'
                    className='textbox add'
                    variant='standard'
                    size='small'
                    name='posting_id'
                    value={posting_id}
                    onChange={changeHandler}
                    sx={{ m: 2 }}
                />
                <TextField
                    label='Total Open Amount'
                    className='textbox add'
                    variant='standard'
                    size='small'
                    name='total_open_amount'
                    value={total_open_amount}
                    onChange={changeHandler}
                    sx={{ m: 2 }}
                />
            </div>
            <div>
                <TextField
                    label='Baseline Create Date'
                    className='textbox add'
                    type={'date'}
                    variant='outlined'
                    size='small'
                    name='baseline_create_date'
                    value={baseline_create_date}
                    onChange={changeHandler}
                    sx={{ m: 2 }}
                />
                <TextField
                    label='Customer Payment Terms'
                    className='textbox add'
                    variant='standard'
                    size='small'
                    name='cust_payment_terms'
                    value={cust_payment_terms}
                    onChange={changeHandler}
                    sx={{ m: 2 }}
                />
                <TextField
                    label='Invoice Id'
                    className='textbox add'
                    variant='standard'
                    size='small'
                    name='invoice_id'
                    value={invoice_id}
                    onChange={changeHandler}
                    sx={{ m: 2 }}
                />
            </div>
            </div>
            <div className='footer'>
                <button className='add-bt' onClick={submitHandler}>ADD</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='add-bt' onClick={handleClose} > CANCEL</button>
            </div>
            
        </div>
        </div>
    )
}

export default Add






