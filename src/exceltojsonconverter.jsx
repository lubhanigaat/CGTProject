import { FileUploader, FlexBox, FlexBoxJustifyContent } from "@ui5/webcomponents-react";
import{Button,ComboBox,ComboBoxItem} from "@ui5/webcomponents-react";
import React, { useState } from "react";
import * as XLSX from "xlsx";
import { sapUiContentPadding} from "@ui5/webcomponents-react-base/dist/styling/spacing";

const ExcelToJsonConverter = () => { // functional component
 
  const [SelectedValue,setSelectedValue]=useState('');
  //Event handler function handleComboBox
  const handleComboBox=(event)=>{
    const { value } = event.target;
    setSelectedValue(value);
  }
//Event handler function 
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();// reader object to read file

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" }); // parse the excel file
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });// converted to json
     
      const headerRow=json[0];
      const rowData= json.slice(1);

      const result=rowData
      .filter((row)=> row.length===headerRow.length)//filter out rows with different cell count compared to header row.
      .map((row)=>{
        const rowObject={};
        headerRow.forEach((header,index)=>{
          rowObject[header]=row[index];
        });
        return rowObject;// array of object stored 
      });

      //setJsonData(json);
      console.log(result);
    };

    reader.readAsArrayBuffer(file);// File reader
  };

  return (
    <div>
      <FlexBox
      justifyContent={FlexBoxJustifyContent.SpaceBetween}
      >
        <FlexBox
        justifyContent={FlexBoxJustifyContent.SpaceAround}
        >
 <babel 
 style={{...sapUiContentPadding}}
 >
      Location
     </babel>
      <ComboBox 
      style={{backgroundColor: 'ButtonFace'}}
    
onChange={handleComboBox}
onSelectionChange={handleComboBox}
onInput={handleComboBox}>
  <ComboBoxItem text="Bangalore"/>
  <ComboBoxItem text="Gurugram"/>
  <ComboBoxItem text="Pune"/>
  <ComboBoxItem text="Mumbai"/>
  <ComboBoxItem text="Hyderabad"/>
  
</ComboBox>
        </FlexBox>
        <FlexBox  
        justifyContent={FlexBoxJustifyContent.Center}
        >
        <babel
        style={{...sapUiContentPadding}}
        >
      Master Data
    </babel>
      <FileUploader
     
       style={{
        //backgroundColor: 'ButtonFace',
        borderRadius:'10px',
        padding: '5px',
        fontSize: '16px',
      }}
      type="file" 
      onChange={handleFileChange} 
      accept=".xlsx" 
      >
        <Button 
        style={{
        backgroundColor:'green',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '10px',
        fontSize: '16px',
        cursor: 'pointer',
      }}> 
          Converter
        </Button>
      </FileUploader>
        </FlexBox>
      </FlexBox>
      </div>
  );
};

export default ExcelToJsonConverter;
//{jsonData && <pre>{JSON.stringify(jsonData, null, 2)}</pre>}