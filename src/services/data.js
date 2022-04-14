import axios from "axios"

export const getData = async () => {
    let response = await axios.get(`http://localhost:8080/hrc_test/Fetch`);
    console.log(response.data);
    return response.data;
}

export const addData = async (
    { business_code, cust_number, clear_date, buisness_year, doc_id, posting_date, document_create_date,
        due_in_date, invoice_currency, document_type, posting_id, total_open_amount, baseline_create_date,
        cust_payment_terms, invoice_id }) => {
     let str = "business_code=" + business_code + "&cust_number=" + cust_number +
         "&clear_date=" + clear_date + "&buisness_year=" + buisness_year + "&doc_id=" + doc_id +
         "&posting_date=" + posting_date + "&document_create_date=" + document_create_date + "&due_in_date=" + due_in_date +
         "&invoice_currency=" + invoice_currency + "&document_type=" + document_type + "&posting_id=" + posting_id +
         "&total_open_amount=" + total_open_amount + "&baseline_create_date=" + baseline_create_date +
         "&cust_payment_terms=" + cust_payment_terms + "&invoice_id=" + invoice_id;

    let response = await axios.get('http://localhost:8080/hrc_test/AddInvoice?' + str);
    console.log(response.data);
    return response.data;
}

export const editData = async ({sl_no, invoice_currency, cust_payment_terms }) => {
    let str = "sl_no=" + sl_no + "&invoice_currency=" + invoice_currency + "&cust_payment_terms=" + cust_payment_terms;
    // let str = "sl_no=" + 1 + "&invoice_currency=" + "CAD" + "&cust_payment_terms=" + "NAD1";
    let response = await axios.get('http://localhost:8080/hrc_test/Update?' + str);
    console.log(response.data);
    return response.data;
}

export const deleteData = async (sl_no) => {
    let flag = false;
    let response = await axios.get('http://localhost:8080/hrc_test/Delete?sl_no=' + sl_no);
    console.log(response.data);
    if (response.data) {
        flag = true;
    }
    return flag;
}

export const searchData = async ({cust_number, doc_id, invoice_id, buisness_year}) => {
     let str = "cust_number=" + cust_number + "&doc_id=" + doc_id + "&invoice_id=" + invoice_id + "&buisness_year=" + buisness_year;
    //let str = "cust_number=" + 725421 + "&doc_id=" + "&invoice_id=" + "&buisness_year=" + 2020;
    let response = await axios.get('http://localhost:8080/hrc_test/Search?' + str);
    console.log(response.data);
    return response.data;
}