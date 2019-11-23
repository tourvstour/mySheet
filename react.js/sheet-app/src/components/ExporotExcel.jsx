import React, { Component } from 'react'
import Workbook from 'react-excel-workbook'
import excel from '../static/excel.png'
const columns = [
    {
        date: "2562-01-23",
        number: "820079564894",
        price: "970",
        nameCustomer: "ชื่อลูกค้า",
        address: "ที่อยู่จัดส่งพัสดุ",
        post: "99999",
        phone: "080000007",
        ex: "<==ลบข้อความตัวอย่างในบรรทัดนี้"
    }
]
class exportExcel extends Component {

    render() {
        return (
            <div>
                <p>
                    <Workbook filename="COD.xlsx" element={<a>1.ดาวโหลดแบบฟอร์ม Excel{" "}<img src={excel} width="10%" /></a>} >
                        <Workbook.Sheet data={columns} name="Sheet A" columns={{ color: "red" }}>
                            <Workbook.Column label="date" value="date" />
                            <Workbook.Column label="เลขพัสดุ" value="number" />
                            <Workbook.Column label="ราคาสินค้า" value="price" />
                            <Workbook.Column label="ชื่อลูกค้า" value="nameCustomer" />
                            <Workbook.Column label="ที่อยู่จัดส่งพัสดุ" value="address" />
                            <Workbook.Column label="รหัสไปรษณี" value="post" />
                            <Workbook.Column label="เบอร์ติดต่อ" value="phone" />
                            <Workbook.Column label="" value="ex" />
                        </Workbook.Sheet>
                    </Workbook>
                </p>
                <p>2.จัดทำ File Excel ตามแบบฟอร์มที่กำหนด</p>
                <p>3.คลิกปุ่ม "เลือกไฟล์" เพื่อทำการเลือกไฟล์ </p>
                <p>4.นำเข้า File Excel ที่มีข้อมูล C.O.D แล้ว Upload โดยกดปุ่ม "อัพโหลดข้อมูล"</p>
            </div>
        )
    }
}

export default exportExcel