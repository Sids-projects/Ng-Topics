import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent {
  ngForData = {
    data: [
      {
        log_date: '2024-01-12',
        task_data: [
          {
            developer: {
              code: 'VS0047',
              first_check_in: 1705036155000.0,
              id: 8,
              last_check_in: 1705072598000.0,
              name: 'A. DAVID WILSON',
              total_hour: 10.07,
            },
            task: [
              {
                code: 'TSK869',
                duration: 1.0,
                id: 869.0,
                name: 'BE & FE code Deployement for UAT KVB\t',
              },
              {
                code: null,
                duration: 7.0,
                id: 50.0,
                name: 'House Keeping',
              },
              {
                code: 'TSK25',
                duration: 1.0,
                id: 25.0,
                name: 'KVB SIT and UAT error on Deployment',
              },
              {
                code: 'TSK1166',
                duration: 1.0,
                id: 1166.0,
                name: 'BE and FE Code Deployment to NAC SIT Separate port Cibil',
              },
            ],
          },
          {
            developer: {
              code: 'VS0091',
              first_check_in: 1705034113000.0,
              id: 11,
              last_check_in: 1705069857000.0,
              name: 'M.BALAMANIRAJA',
              total_hour: 9.55,
            },
            task: [
              {
                code: 'TSK1169',
                duration: 6.0,
                id: 1169.0,
                name: 'KVB Client meeting in Peters Road.',
              },
            ],
          },
          {
            developer: {
              code: 'VS0094',
              first_check_in: 1705042478000.0,
              id: 12,
              last_check_in: 1705073854000.0,
              name: 'S.ABISHOK',
              total_hour: 8.42,
            },
            task: [
              {
                code: 'TSK1194',
                duration: 8.0,
                id: 1194.0,
                name: 'KVB Client meeting with SK Sir',
              },
              {
                code: 'TSK999',
                duration: 2.0,
                id: 999.0,
                name: 'FE and BE Deployment Activity and Team Support.',
              },
              {
                code: 'TSK1196',
                duration: 1.0,
                id: 1196.0,
                name: '1.TA Approver API issues in MYSQL 8 Upgrade platform.\n2.support with sheela and Ramesh',
              },
            ],
          },
          {
            developer: {
              code: 'VS0117',
              first_check_in: null,
              id: 16,
              last_check_in: null,
              name: 'I MARIA SHANTHA SHEELA',
              total_hour: null,
            },
            task: [
              {
                code: 'TSK1150',
                duration: 4.0,
                id: 1150.0,
                name: 'KVB : TA MONO : ADVANCE APPROVAL ISSUE AND EXPENSE APPROVAL ISSUE ',
              },
              {
                code: 'TSK1154',
                duration: 2.0,
                id: 1154.0,
                name: 'IB : LIBRARY TEMPLATE DOWNLOAD API WRITTING ON BACK END',
              },
              {
                code: 'TSK1156',
                duration: 2.0,
                id: 1156.0,
                name: 'TSK1154\n\n|\n\nIB : LIBRARY TEMPLATE DOWNLOAD  ON FRONT  END AND LIBRARY UPLOAD IN FRONT END SCREEN AND MASTER MIGRATION URL IN ALL DROP DOWN ',
              },
            ],
          },
          {
            developer: {
              code: 'VS0128',
              first_check_in: 1705035939000.0,
              id: 18,
              last_check_in: null,
              name: 'V. VIGNESHWARAN',
              total_hour: 0.0,
            },
            task: [
              {
                code: null,
                duration: 4.5,
                id: 71.0,
                name: 'UAT & Production Support',
              },
              {
                code: null,
                duration: 6.0,
                id: 2773.0,
                name: 'Meeting with Saravankumar Sir @KVB',
              },
            ],
          },
          {
            developer: {
              code: 'VS0143',
              first_check_in: 1705043478000.0,
              id: 20,
              last_check_in: 1705072258000.0,
              name: 'VIGNESH SELVARAJ',
              total_hour: 7.59,
            },
            task: [
              {
                code: null,
                duration: 1.5,
                id: 80.0,
                name: 'Discussion & Review',
              },
              {
                code: null,
                duration: 1.5,
                id: 2734.0,
                name: 'Discussion on Form Composer module',
              },
              {
                code: null,
                duration: 0.5,
                id: 2736.0,
                name: 'NAC PRS Review',
              },
              {
                code: null,
                duration: 1.0,
                id: 2737.0,
                name: 'Mail & Communication',
              },
            ],
          },
          {
            developer: {
              code: 'VS0223',
              first_check_in: 1705035630000.0,
              id: 33,
              last_check_in: null,
              name: 'NAGARAJAN',
              total_hour: 0.0,
            },
            task: [
              {
                code: 'TSK690',
                duration: 1.0,
                id: 690.0,
                name: 'Deployment - DO server BE Deployment',
              },
              {
                code: 'TSK691',
                duration: 0.5,
                id: 691.0,
                name: 'Deployment - DO server FE Deployment',
              },
              {
                code: 'TSK1106',
                duration: 1.0,
                id: 1106.0,
                name: 'Deployment - Meeting with team members , ad hoc  meeting with leads ',
              },
              {
                code: 'TSK1107',
                duration: 1.0,
                id: 1107.0,
                name: 'Team meeting with team members and Review ',
              },
              {
                code: 'TSK693',
                duration: 1.0,
                id: 693.0,
                name: "Project Discussion and Team Meeting with team members ,  Leads ,  BA's and adhoc meeting",
              },
              {
                code: 'TSK557',
                duration: 4.0,
                id: 557.0,
                name: 'working with team in Inter Integrity  & ARS Project',
              },
            ],
          },
          {
            developer: {
              code: 'VS0226',
              first_check_in: 1705034745000.0,
              id: 35,
              last_check_in: 1705079284000.0,
              name: 'SUGUMAR K',
              total_hour: 12.22,
            },
            task: [
              {
                code: 'TSK1180',
                duration: 6.0,
                id: 1180.0,
                name: 'KVB pongal celebration and project meeting ',
              },
              {
                code: 'TSK1181',
                duration: 2.0,
                id: 1181.0,
                name: 'VAPT points \n1.HTTPonly and secure flag enable\n2.Allow host only server IP\n3.Inproper Input validation and specila char validation\n4.Content security  policy.',
              },
            ],
          },
          {
            developer: {
              code: 'VS0238',
              first_check_in: 1705033291000.0,
              id: 42,
              last_check_in: 1705054759000.0,
              name: 'K.RAGHUL',
              total_hour: 5.57,
            },
            task: [
              {
                code: 'TSK1205',
                duration: 5.0,
                id: 1205.0,
                name: 'NPM PRIVATE PACKAGE FOR SUMMARY CHECK BOX',
              },
            ],
          },
          {
            developer: {
              code: 'VS0239',
              first_check_in: 1705034833000.0,
              id: 43,
              last_check_in: 1705070389000.0,
              name: 'V.SANTHOSHKUMAR',
              total_hour: 9.52,
            },
            task: [
              {
                code: 'TSK1145',
                duration: 1.0,
                id: 1145.0,
                name: 'Add Dependancy datas in live PPR Report',
              },
              {
                code: 'TSK1147',
                duration: 1.0,
                id: 1147.0,
                name: 'Test - PPR Live Code Reflection and Basic functionalities',
              },
              {
                code: 'TSK1155',
                duration: 3.0,
                id: 1155.0,
                name: ' DRS Filedownload scheduler trigger Modifications',
              },
              {
                code: 'TSK1151',
                duration: 2.5,
                id: 1151.0,
                name: 'DRS - Report lists modifications',
              },
            ],
          },
          {
            developer: {
              code: 'VS0250',
              first_check_in: 1705035916000.0,
              id: 52,
              last_check_in: 1705072259000.0,
              name: 'RAGHUL D',
              total_hour: 10.05,
            },
            task: [
              {
                code: 'TSK1124',
                duration: 1.0,
                id: 1124.0,
                name: 'done task in one segment based multiple component mapping creating  in master and tested in backend ',
              },
              {
                code: 'TSK1126',
                duration: 3.0,
                id: 1126.0,
                name: 'done task in document upload api and tested a api ',
              },
              {
                code: 'TSK1127',
                duration: 4.0,
                id: 1127.0,
                name: 'uploading country,state,city,pincode data in mysql for employee address creation',
              },
            ],
          },
          {
            developer: {
              code: 'VS0251',
              first_check_in: 1705035481000.0,
              id: 53,
              last_check_in: null,
              name: 'HARI KRISHNAN M',
              total_hour: 0.0,
            },
            task: [
              {
                code: 'TSK1173',
                duration: 8.0,
                id: 1173.0,
                name: 'Employee Data fix in the UI Screen and updating the Employee Payroll structure to allow the custom deductions',
              },
            ],
          },
          {
            developer: {
              code: 'VS0254',
              first_check_in: 1705034105000.0,
              id: 56,
              last_check_in: null,
              name: 'N DHIVYA DHARSHINI',
              total_hour: 0.0,
            },
            task: [
              {
                code: 'TSK1161',
                duration: 0.3,
                id: 1161.0,
                name: 'Employee Paystructure Deduction table added one filed is_customdeduct',
              },
              {
                code: 'TSK1162',
                duration: 2.0,
                id: 1162.0,
                name: 'Employee Paystructure Deduction Create Paycomponent and is_customdeduct validation',
              },
              {
                code: 'TSK1163',
                duration: 2.0,
                id: 1163.0,
                name: 'EmployeePaystructure_deductions create changes added is_customdeduct',
              },
              {
                code: 'TSK1164',
                duration: 4.0,
                id: 1164.0,
                name: 'Manual_run changes(validation bonus custom,is_deductions)',
              },
            ],
          },
          {
            developer: {
              code: 'VS0255',
              first_check_in: 1705039161000.0,
              id: 57,
              last_check_in: 1705053860000.0,
              name: 'J SWETHA',
              total_hour: 4.04,
            },
            task: [
              {
                code: 'TSK1171',
                duration: 4.0,
                id: 1171.0,
                name: 'redis list data type function in django',
              },
            ],
          },
          {
            developer: {
              code: 'VS0256',
              first_check_in: 1705034385000.0,
              id: 58,
              last_check_in: 1705068895000.0,
              name: 'K DHARSHINI',
              total_hour: 9.35,
            },
            task: [
              {
                code: 'TSK755',
                duration: 2.0,
                id: 755.0,
                name: '#10164 -In Vendor Report - Unable to force trigger the contract expired mail trigger internal server error showing ',
              },
              {
                code: 'TSK1178',
                duration: 6.0,
                id: 1178.0,
                name: 'Production Issuses give the data fix\n 1.We did modification on vendor PA00570, after modification unable to update header for vendor PA00570, we are getting error 500 and data not showing.\n2.For vendor PA03751 \u2013 All supplier data has been updated but still showing as supplier data missing.',
              },
            ],
          },
          {
            developer: {
              code: 'VS0257',
              first_check_in: 1705034903000.0,
              id: 59,
              last_check_in: 1705070579000.0,
              name: 'S KAAVIYA',
              total_hour: 9.54,
            },
            task: [
              {
                code: 'TSK1157',
                duration: 6.0,
                id: 1157.0,
                name: 'aggregation topic (filter,sum,group)',
              },
            ],
          },
          {
            developer: {
              code: 'VS0263',
              first_check_in: 1705034505000.0,
              id: 62,
              last_check_in: 1705070139000.0,
              name: 'ASWINI J',
              total_hour: 9.53,
            },
            task: [
              {
                code: 'TSK1185',
                duration: 1.0,
                id: 1185.0,
                name: 'To Discussed the further step for rule masters and discussing about master screen changes',
              },
            ],
          },
          {
            developer: {
              code: 'VS0264',
              first_check_in: 1705034957000.0,
              id: 63,
              last_check_in: 1705070605000.0,
              name: 'KOWSALYA S',
              total_hour: 9.54,
            },
            task: [
              {
                code: 'TSK1158',
                duration: 1.5,
                id: 1158.0,
                name: 'DRS Master Screen  and Schedular Screen Change',
              },
              {
                code: 'TSK1153',
                duration: 2.0,
                id: 1153.0,
                name: 'Schedule Screen Calculation   Change ',
              },
              {
                code: 'TSK1148',
                duration: 1.5,
                id: 1148.0,
                name: 'Schedule Summary Screen Change',
              },
              {
                code: 'TSK1144',
                duration: 2.0,
                id: 1144.0,
                name: 'Schedule Item Screen change ',
              },
            ],
          },
          {
            developer: {
              code: 'VS0275',
              first_check_in: 1705037978000.0,
              id: 65,
              last_check_in: 1705058336000.0,
              name: 'R SARAVANAN',
              total_hour: 5.39,
            },
            task: [
              {
                code: 'TSK615',
                duration: 5.0,
                id: 615.0,
                name: 'Mongodb Study and analyse',
              },
            ],
          },
          {
            developer: {
              code: 'VS0277',
              first_check_in: 1705040038000.0,
              id: 67,
              last_check_in: null,
              name: 'K.MANIKANDAN',
              total_hour: 0.0,
            },
            task: [
              {
                code: null,
                duration: 5.0,
                id: 2661.0,
                name: 'Client meeting',
              },
            ],
          },
          {
            developer: {
              code: 'VS0280',
              first_check_in: 1705038752000.0,
              id: 69,
              last_check_in: 1705071585000.0,
              name: 'SARAVANAN L',
              total_hour: 9.07,
            },
            task: [
              {
                code: 'TSK470',
                duration: 4.0,
                id: 470.0,
                name: 'Vendor report download #10101',
              },
              {
                code: 'TSK890',
                duration: 2.0,
                id: 890.0,
                name: 'File upload',
              },
              {
                code: 'TSK1175',
                duration: 2.0,
                id: 1175.0,
                name: 'address line 1 and address line two remove dot (validation)',
              },
            ],
          },
          {
            developer: {
              code: 'VS0291',
              first_check_in: 1705035084000.0,
              id: 129,
              last_check_in: 1705066883000.0,
              name: 'HARISH KUMAR D',
              total_hour: 8.49,
            },
            task: [
              {
                code: 'TSK956',
                duration: 1.0,
                id: 956.0,
                name: '1.MM -Bom Master Edit screen need add in UI  ',
              },
              {
                code: 'TSK1167',
                duration: 7.0,
                id: 1167.0,
                name: '1.Kvb-Vendor-master,Tax ,subtax and tax rate need to add active inactive search datas 2.master,Tax ,subtax and tax rate allignment issueses ',
              },
            ],
          },
          {
            developer: {
              code: 'VS0294',
              first_check_in: 1705035856000.0,
              id: 132,
              last_check_in: 1705068895000.0,
              name: 'MOHAN E',
              total_hour: 9.1,
            },
            task: [
              {
                code: 'TSK1114',
                duration: 8.0,
                id: 1114.0,
                name: '1.watched hrms demo video(10:15-1:30) 2.analysed checkin api(2:30-5:00)  3.overview the attendasschedular(5:30-7:10)',
              },
            ],
          },
          {
            developer: {
              code: 'VS0295',
              first_check_in: 1705036064000.0,
              id: 133,
              last_check_in: 1705072347000.0,
              name: 'SARAVANAN M',
              total_hour: 10.04,
            },
            task: [
              {
                code: 'TSK1165',
                duration: 7.5,
                id: 1165.0,
                name: 'writed city, pincode, state, country and district  bulk upload api in masteservice ',
              },
            ],
          },
          {
            developer: {
              code: 'VS0297',
              first_check_in: 1705034249000.0,
              id: 135,
              last_check_in: 1705068999000.0,
              name: 'KEERTHANA D',
              total_hour: 9.39,
            },
            task: [
              {
                code: 'TSK1135',
                duration: 8.0,
                id: 1135.0,
                name: '1.IN HRMS ATTENDENCE MODULE ANALYSED THE MODELS IN PROJECT AND APIS AND LEARNED TIMEDELTA CONCEPTS(10:20 -11.30)\n2.WATCHED HRMS DEMO VIDEOS (11.30 - 1.30)\n3.ANALYSED CHECK-IN AND OUT API (2.30 - 4.00)\n4.ANALYSED ATTENDANCE_SCHD API(4.30 - 7.30)',
              },
            ],
          },
          {
            developer: {
              code: 'VS0306',
              first_check_in: 1705032765000.0,
              id: 143,
              last_check_in: 1705070272000.0,
              name: 'UMA DEVI P',
              total_hour: 10.25,
            },
            task: [
              {
                code: 'TSK1061',
                duration: 7.0,
                id: 1061.0,
                name: 'ARS convert the Rule master to be user friendly and CBS narration column to be split user friendly and FAS template value date , CBS date and added in FAS transaction table.',
              },
              {
                code: 'TSK1182',
                duration: 1.0,
                id: 1182.0,
                name: 'To Discuss the ARS Rule master points and ARS Working flow, the tag number generated should be present for both CBS and Wisefin the formet for alphanumeric ',
              },
            ],
          },
          {
            developer: {
              code: 'VS0309',
              first_check_in: 1705035772000.0,
              id: 146,
              last_check_in: 1705068548000.0,
              name: 'BALAJI A',
              total_hour: 9.06,
            },
            task: [
              {
                code: 'TSK1111',
                duration: 4.0,
                id: 1111.0,
                name: 'The KVB SIT Server TA e-Claim  Bugzilla Points  Checking For  Comment  Updated ',
              },
              {
                code: 'TSK1112',
                duration: 4.0,
                id: 1112.0,
                name: 'IB UAT Server- Vendor Full Checking Some One Issue Points \n Updated in Bugzilla \n',
              },
            ],
          },
          {
            developer: {
              code: 'VS0318',
              first_check_in: 1705032750000.0,
              id: 155,
              last_check_in: 1705067184000.0,
              name: 'NARESH M',
              total_hour: 9.33,
            },
            task: [
              {
                code: 'TSK829',
                duration: 4.0,
                id: 829.0,
                name: 'To Chnage the inline style to CLASS for vendor master/activity desription',
              },
              {
                code: 'TSK880',
                duration: 4.0,
                id: 880.0,
                name: '#10097',
              },
            ],
          },
          {
            developer: {
              code: 'VS0319',
              first_check_in: 1705036653000.0,
              id: 156,
              last_check_in: 1705068992000.0,
              name: 'A . DOMNIC BOSCO',
              total_hour: 8.58,
            },
            task: [
              {
                code: 'TSK1152',
                duration: 8.0,
                id: 1152.0,
                name: 'In IB reports module the Query execution screen does not work properly when click the query execution and then it will be routed at reports.ts component',
              },
            ],
          },
          {
            developer: {
              code: 'VS0321',
              first_check_in: 1705034089000.0,
              id: 158,
              last_check_in: 1705066994000.0,
              name: 'DRAVID P',
              total_hour: 9.08,
            },
            task: [
              {
                code: 'TSK1117',
                duration: 1.0,
                id: 1117.0,
                name: 'Between transfer amount has to less in allocation particular fetch.',
              },
              {
                code: 'TSK1118',
                duration: 2.5,
                id: 1118.0,
                name: 'Creating new API for parent summary.',
              },
              {
                code: 'TSK1119',
                duration: 2.5,
                id: 1119.0,
                name: 'Creating new API for child summary.',
              },
              {
                code: 'TSK1120',
                duration: 1.5,
                id: 1120.0,
                name: 'Summary flow checking with amount correction.',
              },
            ],
          },
          {
            developer: {
              code: 'VS0326',
              first_check_in: 1705034886000.0,
              id: 163,
              last_check_in: 1705067019000.0,
              name: 'VASANTHA MOHAN R',
              total_hour: 8.55,
            },
            task: [
              {
                code: 'TSK1121',
                duration: 3.0,
                id: 1121.0,
                name: '1. TNIB_LIB Create New Component for Branch Transaction Summary screen',
              },
              {
                code: 'TSK1122',
                duration: 2.5,
                id: 1122.0,
                name: 'TNIB_LIB Head and Subhead Wise summary screen with transaction view',
              },
              {
                code: 'TSK1123',
                duration: 2.0,
                id: 1123.0,
                name: 'Between Transaction wise amount issue , Status modify button validation , decimal number bug during update child records ',
              },
            ],
          },
          {
            developer: {
              code: 'VS0340',
              first_check_in: 1705034586000.0,
              id: 238,
              last_check_in: 1705067526000.0,
              name: 'LOGESH M',
              total_hour: 9.09,
            },
            task: [
              {
                code: 'TSK987',
                duration: 8.0,
                id: 987.0,
                name: 'Rule masters condition by user for Ars modifying the code',
              },
            ],
          },
          {
            developer: {
              code: 'VS0342',
              first_check_in: 1705035615000.0,
              id: 240,
              last_check_in: 1705069032000.0,
              name: 'ADHIKESAVAN',
              total_hour: 9.16,
            },
            task: [
              {
                code: 'TSK745',
                duration: 1.0,
                id: 745.0,
                name: 'Tax ,Subtax and Taxrate master in micro',
              },
              {
                code: 'TSK1132',
                duration: 7.0,
                id: 1132.0,
                name: " Worked in TAX, SUBTAX and TAXRATE Master.\n1. Created a fetch API for SUBTAX and TAXRATE Master.\n2. Tested  all API's workflow Create, Update, Fetch and checked the audit table functions also\n3. Connected with frontend and worked in the overall flow for TAX, SUBTAX and TAXRATE Master.",
              },
            ],
          },
          {
            developer: {
              code: 'VS0343',
              first_check_in: 1705035473000.0,
              id: 241,
              last_check_in: 1705070807000.0,
              name: 'SUBASH G',
              total_hour: 9.48,
            },
            task: [
              {
                code: 'TSK1093',
                duration: 6.0,
                id: 1093.0,
                name: 'Bulk Upload Deduction Excel upload and template download',
              },
              {
                code: 'TSK1160',
                duration: 2.0,
                id: 1160.0,
                name: 'Payroll screen design changes',
              },
            ],
          },
          {
            developer: {
              code: 'VS0344',
              first_check_in: 1705035154000.0,
              id: 242,
              last_check_in: null,
              name: 'KOUSHIK K',
              total_hour: 0.0,
            },
            task: [
              {
                code: 'TSK1101',
                duration: 3.0,
                id: 1101.0,
                name: 'get employee details and their working duration by giving type and log date',
              },
              {
                code: 'TSK1102',
                duration: 1.5,
                id: 1102.0,
                name: 'checking the phone number error while uploading lead data ',
              },
              {
                code: 'TSK1110',
                duration: 1.5,
                id: 1110.0,
                name: 'bug fixing in while creating a product template',
              },
            ],
          },
          {
            developer: {
              code: 'VS0345',
              first_check_in: 1705034908000.0,
              id: 243,
              last_check_in: null,
              name: 'MADHAVAN M',
              total_hour: 0.0,
            },
            task: [
              {
                code: 'TSK1108',
                duration: 4.5,
                id: 1108.0,
                name: 'KVB - DRS - DRS Summary Component - Visibility Flow Learning ',
              },
            ],
          },
          {
            developer: {
              code: 'VS0348',
              first_check_in: 1705034822000.0,
              id: 246,
              last_check_in: 1705067988000.0,
              name: 'RATHINA PRIYA M',
              total_hour: 9.12,
            },
            task: [
              {
                code: 'TSK1138',
                duration: 8.0,
                id: 1138.0,
                name: 'NAC project - learned about userservice and masterservice app code flow.',
              },
            ],
          },
          {
            developer: {
              code: 'VS0353',
              first_check_in: 1705036339000.0,
              id: 251,
              last_check_in: 1705068791000.0,
              name: 'DEEPANCHAKKARAVARTHI C',
              total_hour: 9.0,
            },
            task: [
              {
                code: 'TSK1134',
                duration: 2.0,
                id: 1134.0,
                name: 'Python Regular Expression Learning ',
              },
              {
                code: 'TSK1130',
                duration: 3.0,
                id: 1130.0,
                name: 'Create Tables with Foreign key mapping and extracting values using Foreign keys',
              },
              {
                code: 'TSK1055',
                duration: 2.5,
                id: 1055.0,
                name: 'Drsservice - Report_header_list API Flow LEARNING',
              },
            ],
          },
        ],
      },
      {
        log_date: '2024-01-11',
        task_data: [
          {
            developer: {
              code: 'VS0127',
              first_check_in: 1704950912000.0,
              id: 1,
              last_check_in: 1704986942000.0,
              name: 'MONESHRAJ P',
              total_hour: 10.0,
            },
            task: [
              {
                code: 'TSK1057',
                duration: 4.0,
                id: 1057.0,
                name: 'NAC - MIGRATION ',
              },
              {
                code: 'MEET014',
                duration: 1.32,
                id: 14.0,
                name: 'HRMS KT',
              },
              {
                code: null,
                duration: 1.0,
                id: 70.0,
                name: 'Code Review',
              },
              {
                code: 'TSK1064',
                duration: 1.5,
                id: 1064.0,
                name: 'Document preparation for HRMS leave logic and computation',
              },
            ],
          },
          {
            developer: {
              code: 'VS0047',
              first_check_in: 1704948249000.0,
              id: 8,
              last_check_in: 1704990723000.0,
              name: 'A. DAVID WILSON',
              total_hour: 11.47,
            },
            task: [
              {
                code: 'TSK869',
                duration: 2.0,
                id: 869.0,
                name: 'BE & FE code Deployement for UAT KVB\t',
              },
              {
                code: 'TSK1140',
                duration: 2.0,
                id: 1140.0,
                name: 'Production Code push Documentation',
              },
              {
                code: 'TSK1141',
                duration: 2.0,
                id: 1141.0,
                name: 'Production Code Deployment Activity',
              },
              {
                code: 'TSK1143',
                duration: 2.0,
                id: 1143.0,
                name: 'Nac AWS code Deployment to NAC SIT',
              },
              {
                code: 'TSK1146',
                duration: 1.0,
                id: 1146.0,
                name: 'FE Code Build and Deployment on SIT',
              },
              {
                code: 'TSK1149',
                duration: 1.5,
                id: 1149.0,
                name: 'Invoice Billing Count and Detail For process',
              },
              {
                code: 'TSK25',
                duration: 1.0,
                id: 25.0,
                name: 'KVB SIT and UAT error on Deployment',
              },
            ],
          },
          {
            developer: {
              code: 'VS0091',
              first_check_in: 1704947780000.0,
              id: 11,
              last_check_in: 1704982565000.0,
              name: 'M.BALAMANIRAJA',
              total_hour: 9.39,
            },
            task: [
              {
                code: 'TSK1009',
                duration: 1.0,
                id: 1009.0,
                name: 'Bug 10140 - In Change View - ECF level transaction is missing',
              },
              {
                code: 'TSK988',
                duration: 1.0,
                id: 988.0,
                name: 'Bug 10151 - In Advance for supplier - Credit details - by default one empty line is showing in ecf it is allowing but in ap it is not allowing',
              },
              {
                code: 'TSK1034',
                duration: 0.5,
                id: 1034.0,
                name: 'Meeting with Gajalakshmi through voice call discuss about Bug 10175,10151 and completed, working points',
              },
              {
                code: 'TSK1028',
                duration: 0.5,
                id: 1028.0,
                name: 'Meeting with Nithish through voice call discuss about Bug 10140 ',
              },
              {
                code: 'TSK986',
                duration: 3.0,
                id: 986.0,
                name: '10171 In ECF Inventory - Invoice details - In quantity - while using decimal values 500 internal server error showing\n',
              },
              {
                code: 'TSK1040',
                duration: 0.5,
                id: 1040.0,
                name: 'Meeting With Vikneshwaran discuss about Bug 10139,10140,10157,10158 and completed/working ponits',
              },
              {
                code: 'TSK1041',
                duration: 1.5,
                id: 1041.0,
                name: 'Bug 9832 - In AP Inward - Inward Creation - Remarks field required in Inward Creation screen ( Non Mandatory )',
              },
            ],
          },
          {
            developer: {
              code: 'VS0094',
              first_check_in: 1704947984000.0,
              id: 12,
              last_check_in: 1704984665000.0,
              name: 'S.ABISHOK',
              total_hour: 10.11,
            },
            task: [
              {
                code: 'TSK599',
                duration: 3.0,
                id: 599.0,
                name: 'As discussed with Sheela and Anand, Please provide the UI Option to upload the Migration data\u2019s for the following masters, Employee /City and Pin code / Branch etc.',
              },
              {
                code: 'TSK999',
                duration: 2.0,
                id: 999.0,
                name: 'FE and BE Deployment Activity and Team Support.',
              },
              {
                code: 'TSK1196',
                duration: 2.0,
                id: 1196.0,
                name: '1.TA Approver API issues in MYSQL 8 Upgrade platform.\n2.support with sheela and Ramesh',
              },
            ],
          },
          {
            developer: {
              code: 'VS0095',
              first_check_in: 1704952952000.0,
              id: 13,
              last_check_in: 1704984848000.0,
              name: 'A.ASWANI',
              total_hour: 8.51,
            },
            task: [
              {
                code: 'MEET014',
                duration: 1.32,
                id: 14.0,
                name: 'HRMS KT',
              },
              {
                code: 'TSK668',
                duration: 6.0,
                id: 668.0,
                name: 'Team support',
              },
            ],
          },
          {
            developer: {
              code: 'VS0117',
              first_check_in: null,
              id: 16,
              last_check_in: null,
              name: 'I MARIA SHANTHA SHEELA',
              total_hour: null,
            },
            task: [
              {
                code: 'TSK1072',
                duration: 4.0,
                id: 1072.0,
                name: ' IB : MASTER :EMPLOYEE UPLOAD AND EMPLOYEE DOWNLOAD WRITING BACK END API',
              },
              {
                code: 'TSK1128',
                duration: 1.0,
                id: 1128.0,
                name: 'IB: MASTER : EMPLOYEE UPLOAD AND EMPLOYEE DOWNLOAD WRITING FRONT END API ',
              },
              {
                code: 'TSK1129',
                duration: 2.0,
                id: 1129.0,
                name: 'TEST in Mono TA tour maker , tour approver, tour expense maker, tour expense checker inl8 grade is not approved in l7 grad- TESTING IN PREPROD SERVER .',
              },
              {
                code: 'TSK1136',
                duration: 1.0,
                id: 1136.0,
                name: 'IB : MASTER :EMPLOYEE UPLOAD AND EMPLOYEE DOWNLOAD WRITING FRONT END API',
              },
            ],
          },
          {
            developer: {
              code: 'VS0128',
              first_check_in: 1704948600000.0,
              id: 18,
              last_check_in: 1704991050000.0,
              name: 'V. VIGNESHWARAN',
              total_hour: 11.47,
            },
            task: [
              {
                code: null,
                duration: 8.0,
                id: 71.0,
                name: 'UAT & Production Support',
              },
            ],
          },
          {
            developer: {
              code: 'VS0143',
              first_check_in: 1704954827000.0,
              id: 20,
              last_check_in: 1704987517000.0,
              name: 'VIGNESH SELVARAJ',
              total_hour: 9.04,
            },
            task: [
              {
                code: null,
                duration: 4.5,
                id: 2732.0,
                name: 'General Team Management & Discussions',
              },
            ],
          },
          {
            developer: {
              code: 'VS0215',
              first_check_in: 1704949081000.0,
              id: 31,
              last_check_in: 1704991079000.0,
              name: 'SABARINATHAN T',
              total_hour: 11.39,
            },
            task: [
              {
                code: 'TSK1042',
                duration: 9.0,
                id: 1042.0,
                name: '1Transaction history is showing wrong \n2.System automatically reject the approved entry automatically\n3.Payment type - Customer service charges - if we select cash - walkin customer , GL Should come as 275300105 instead of 275300110\n4.if\u00a0f we select GL\u00a0 - walkin customer , GL Should come as 275300110 instead of 275300040\n5.Gl name has to display in credit gl tab\n6.decimal value adding with amount value\n7.returned entry should be shown default in summary to approver like pending for approval\nonce returned data by approver is edited by\u00a0 maker and submit still showing in Summary as Return (it should be show as Pending only)\n',
              },
            ],
          },
          {
            developer: {
              code: 'VS0223',
              first_check_in: 1704947281000.0,
              id: 33,
              last_check_in: null,
              name: 'NAGARAJAN',
              total_hour: 0.0,
            },
            task: [
              {
                code: 'TSK557',
                duration: 4.0,
                id: 557.0,
                name: 'working with team in Inter Integrity  & ARS Project',
              },
              {
                code: 'TSK690',
                duration: 1.5,
                id: 690.0,
                name: 'Deployment - DO server BE Deployment',
              },
              {
                code: 'TSK691',
                duration: 0.5,
                id: 691.0,
                name: 'Deployment - DO server FE Deployment',
              },
              {
                code: 'TSK693',
                duration: 1.0,
                id: 693.0,
                name: "Project Discussion and Team Meeting with team members ,  Leads ,  BA's and adhoc meeting",
              },
            ],
          },
          {
            developer: {
              code: 'VS0226',
              first_check_in: 1704950122000.0,
              id: 35,
              last_check_in: 1704983387000.0,
              name: 'SUGUMAR K',
              total_hour: 9.14,
            },
            task: [
              {
                code: 'TSK680',
                duration: 5.0,
                id: 680.0,
                name: 'Screen for Tran_api need need to done FE and BE',
              },
              {
                code: 'TSK677',
                duration: 1.0,
                id: 677.0,
                name: 'DTC Report - CSP Issue Fix for app / login / loginlog / welcome / common pages and add one by one module  Report module redeploye after remove styles',
              },
              {
                code: 'TSK195',
                duration: 2.0,
                id: 195.0,
                name: 'Task assined team support code review code movement for team',
              },
            ],
          },
          {
            developer: {
              code: 'VS0238',
              first_check_in: 1704947663000.0,
              id: 42,
              last_check_in: 1704972715000.0,
              name: 'K.RAGHUL',
              total_hour: 6.57,
            },
            task: [
              {
                code: 'TSK1204',
                duration: 6.0,
                id: 1204.0,
                name: 'NPM PRIVATE PACKAGE FOR SUMMARY PAGINATION',
              },
            ],
          },
          {
            developer: {
              code: 'VS0239',
              first_check_in: 1704949446000.0,
              id: 43,
              last_check_in: 1704990939000.0,
              name: 'V.SANTHOSHKUMAR',
              total_hour: 11.31,
            },
            task: [
              {
                code: 'TSK1082',
                duration: 0.5,
                id: 1082.0,
                name: 'Test - Range wise Bug resolved in FA to PPR Insert Api (fas_entry_data_ppr Api)',
              },
              {
                code: 'TSK1083',
                duration: 3.0,
                id: 1083.0,
                name: ' Fom-To Date Run Validation in FA Entry Data To PPR Insert Scheduler',
              },
              {
                code: 'TSK1085',
                duration: 1.0,
                id: 1085.0,
                name: 'Test - FA to PPR Data Insert Scheduler',
              },
              {
                code: 'TSK1086',
                duration: 0.5,
                id: 1086.0,
                name: 'Checklists for NAC PPR Production code movement',
              },
              {
                code: 'TSK1087',
                duration: 2.0,
                id: 1087.0,
                name: 'Support Code move for Production',
              },
            ],
          },
          {
            developer: {
              code: 'VS0240',
              first_check_in: 1704950088000.0,
              id: 44,
              last_check_in: 1704981910000.0,
              name: 'V MAHARAJA KUMAR',
              total_hour: 8.5,
            },
            task: [
              {
                code: null,
                duration: 8.0,
                id: 2522.0,
                name: 'File based routing using Expo Router',
              },
            ],
          },
          {
            developer: {
              code: 'VS0244',
              first_check_in: 1704947567000.0,
              id: 48,
              last_check_in: 1704981908000.0,
              name: 'S VIGNESH',
              total_hour: 9.32,
            },
            task: [
              {
                code: 'TSK1076',
                duration: 4.0,
                id: 1076.0,
                name: 'Private Package Testing userservice with other applications as package',
              },
              {
                code: 'TSK1081',
                duration: 4.0,
                id: 1081.0,
                name: 'Creating Master service as a package',
              },
            ],
          },
          {
            developer: {
              code: 'VS0245',
              first_check_in: 1704946447000.0,
              id: 49,
              last_check_in: 1704982402000.0,
              name: 'K ANAND',
              total_hour: 9.59,
            },
            task: [
              {
                code: 'TSK1045',
                duration: 8.0,
                id: 1045.0,
                name: '1.IB Master Migration Employee bank branch upload API',
              },
            ],
          },
          {
            developer: {
              code: 'VS0250',
              first_check_in: 1704949467000.0,
              id: 52,
              last_check_in: 1704981929000.0,
              name: 'RAGHUL D',
              total_hour: 9.01,
            },
            task: [
              {
                code: 'TSK1022',
                duration: 2.0,
                id: 1022.0,
                name: 'checked a payroll module structure and discuss with akila about the screen',
              },
              {
                code: 'TSK1023',
                duration: 3.0,
                id: 1023.0,
                name: 'checking validation in search summary done dynamically in master screen and checked function',
              },
              {
                code: 'TSK1026',
                duration: 3.0,
                id: 1026.0,
                name: 'done tasks in employee creation in edit drop changed and adding department in edit screen in hr ',
              },
            ],
          },
          {
            developer: {
              code: 'VS0251',
              first_check_in: 1704949577000.0,
              id: 53,
              last_check_in: 1704982045000.0,
              name: 'HARI KRISHNAN M',
              total_hour: 9.01,
            },
            task: [
              {
                code: 'TSK964',
                duration: 1.0,
                id: 964.0,
                name: 'Fixing the UI Alignment Experience Add page in Employee data',
              },
              {
                code: 'TSK970',
                duration: 1.5,
                id: 970.0,
                name: 'Adding the Department field Update in HR Update Employee Screen',
              },
              {
                code: 'TSK972',
                duration: 0.5,
                id: 972.0,
                name: 'Testing Payroll Structure screen',
              },
              {
                code: 'TSK1021',
                duration: 4.0,
                id: 1021.0,
                name: 'Changing the Pay Structure of Deductions column to allow users to enter manually with Type ',
              },
              {
                code: 'TSK1024',
                duration: 1.5,
                id: 1024.0,
                name: 'Checking the Pay Structure UI flow to allow deductions manual entry',
              },
            ],
          },
          {
            developer: {
              code: 'VS0252',
              first_check_in: 1704954934000.0,
              id: 54,
              last_check_in: null,
              name: 'SRIVISHNUNAVEENRAJ',
              total_hour: 0.0,
            },
            task: [
              {
                code: 'TSK1053',
                duration: 4.0,
                id: 1053.0,
                name: 'After code push, Code is not working while migrating the data code is not running  ',
              },
              {
                code: 'TSK1048',
                duration: 3.3,
                id: 1048.0,
                name: 'MIS - Report for Raw Dump 1 extract the data from the pivoted excel shared.',
              },
            ],
          },
          {
            developer: {
              code: 'VS0254',
              first_check_in: 1704946971000.0,
              id: 56,
              last_check_in: 1704984889000.0,
              name: 'N DHIVYA DHARSHINI',
              total_hour: 10.31,
            },
            task: [
              {
                code: 'TSK1067',
                duration: 3.3,
                id: 1067.0,
                name: 'Flow check for employee to payroll testing server',
              },
              {
                code: 'TSK1068',
                duration: 4.0,
                id: 1068.0,
                name: 'write new API  BULK upload for Custom Deductions ',
              },
              {
                code: 'TSK1069',
                duration: 1.3,
                id: 1069.0,
                name: 'Custom Deductions excel Template for Download API',
              },
            ],
          },
          {
            developer: {
              code: 'VS0255',
              first_check_in: 1704947432000.0,
              id: 57,
              last_check_in: 1704986763000.0,
              name: 'J SWETHA',
              total_hour: 10.55,
            },
            task: [
              {
                code: 'TSK1074',
                duration: 9.0,
                id: 1074.0,
                name: 'common function for hash in redis',
              },
            ],
          },
          {
            developer: {
              code: 'VS0256',
              first_check_in: 1704948005000.0,
              id: 58,
              last_check_in: 1704983952000.0,
              name: 'K DHARSHINI',
              total_hour: 9.59,
            },
            task: [
              {
                code: 'TSK754',
                duration: 6.0,
                id: 754.0,
                name: '#10165',
              },
              {
                code: 'TSK1177',
                duration: 2.0,
                id: 1177.0,
                name: 'Meeting with hema and Nithish',
              },
            ],
          },
          {
            developer: {
              code: 'VS0257',
              first_check_in: 1704949574000.0,
              id: 59,
              last_check_in: 1704990984000.0,
              name: 'S KAAVIYA',
              total_hour: 11.3,
            },
            task: [
              {
                code: 'TSK1043',
                duration: 7.0,
                id: 1043.0,
                name: 'mongodb concepts (ACID,document,aggregation,pipeline,graphs, replica)',
              },
            ],
          },
          {
            developer: {
              code: 'VS0264',
              first_check_in: 1704947352000.0,
              id: 63,
              last_check_in: 1704990944000.0,
              name: 'KOWSALYA S',
              total_hour: 12.06,
            },
            task: [
              {
                code: 'TSK1063',
                duration: 1.0,
                id: 1063.0,
                name: 'KVB-NII-Payment Type Based Transaction Type and Customer Type Validation Add',
              },
              {
                code: 'TSK1059',
                duration: 1.0,
                id: 1059.0,
                name: 'KVB-NII-CreditGl  input GL name add ,decimal value adding with amount value',
              },
              {
                code: 'TSK1091',
                duration: 3.0,
                id: 1091.0,
                name: 'KVB-NII-Flow Check',
              },
              {
                code: 'TSK1096',
                duration: 2.0,
                id: 1096.0,
                name: 'KVB-NII-Approved Flow Check , code move and do server flow Check',
              },
            ],
          },
          {
            developer: {
              code: 'VS0275',
              first_check_in: 1704950790000.0,
              id: 65,
              last_check_in: 1704981960000.0,
              name: 'R SARAVANAN',
              total_hour: 8.39,
            },
            task: [
              {
                code: 'TSK615',
                duration: 10.0,
                id: 615.0,
                name: 'Mongodb Study and analyse',
              },
            ],
          },
          {
            developer: {
              code: 'VS0276',
              first_check_in: null,
              id: 66,
              last_check_in: null,
              name: 'CELESTINE FERNANDO',
              total_hour: null,
            },
            task: [
              {
                code: null,
                duration: 2.0,
                id: 86.0,
                name: 'Code Push',
              },
              {
                code: null,
                duration: 6.0,
                id: 66.0,
                name: 'Meetings',
              },
            ],
          },
          {
            developer: {
              code: 'VS0277',
              first_check_in: 1704954733000.0,
              id: 67,
              last_check_in: null,
              name: 'K.MANIKANDAN',
              total_hour: 0.0,
            },
            task: [
              {
                code: null,
                duration: 2.5,
                id: 66.0,
                name: 'Meetings',
              },
              {
                code: null,
                duration: 2.0,
                id: 76.0,
                name: 'Discussion',
              },
              {
                code: null,
                duration: 1.0,
                id: 78.0,
                name: 'Review',
              },
            ],
          },
          {
            developer: {
              code: 'VS0280',
              first_check_in: 1704952630000.0,
              id: 69,
              last_check_in: 1704986696000.0,
              name: 'SARAVANAN L',
              total_hour: 9.27,
            },
            task: [
              {
                code: 'TSK1095',
                duration: 4.0,
                id: 1095.0,
                name: 'while create supplier branch get internall server error ',
              },
              {
                code: 'TSK1094',
                duration: 4.0,
                id: 1094.0,
                name: 'cibil tudf not working aws get unkown error while cibil sperate port routing ',
              },
            ],
          },
          {
            developer: {
              code: 'VS0283',
              first_check_in: 1704965603000.0,
              id: 72,
              last_check_in: 1704982719000.0,
              name: 'GOPINATH',
              total_hour: 4.45,
            },
            task: [
              {
                code: 'TSK1092',
                duration: 4.0,
                id: 1092.0,
                name: '1.If final run is already done for a year and month the records should show as summary, if already moved to invoice  marked by status and pending should show the checkbox to move the data to invoice.',
              },
            ],
          },
          {
            developer: {
              code: 'VS0286',
              first_check_in: 1704950734000.0,
              id: 124,
              last_check_in: 1704982317000.0,
              name: 'SUDHAKAR',
              total_hour: 8.46,
            },
            task: [
              {
                code: 'TSK1113',
                duration: 8.0,
                id: 1113.0,
                name: 'Check the all mailed bug points. 9656 - In CTC Local Conveyance Expense - In Distance field system should not allow to enter the alphabets only allow numbers, 9913 - E-claim Advance Checker-Attachment-Advance Maker uploaded file is not coming to the checker screen, 9745 - In TA Expense Maker - Unable to Enter more than the Eligible amount points are development completed.',
              },
            ],
          },
          {
            developer: {
              code: 'VS0287',
              first_check_in: 1704949463000.0,
              id: 125,
              last_check_in: 1704983472000.0,
              name: 'MAHALAKSHMI S',
              total_hour: 9.26,
            },
            task: [
              {
                code: 'TSK1039',
                duration: 8.0,
                id: 1039.0,
                name: 'points:MM-Bom material mapping-summary api changes details key-added and stage wise validate,update api modification,full flow checking in fe',
              },
            ],
          },
          {
            developer: {
              code: 'VS0290',
              first_check_in: null,
              id: 128,
              last_check_in: null,
              name: 'VIKNESHWARAN',
              total_hour: null,
            },
            task: [
              {
                code: 'TSK1077',
                duration: 1.5,
                id: 1077.0,
                name: 'Bug 10174 (In ECF Inventory - PettyCash - Invoice header - deleted invoice header line item is showing after the approver returned)',
              },
              {
                code: 'TSK1078',
                duration: 1.0,
                id: 1078.0,
                name: 'KVB AP Getting 500 Error while opening the record in AP Approver screen. Code checked and changes done',
              },
              {
                code: 'TSK1079',
                duration: 3.5,
                id: 1079.0,
                name: 'KVB AP Working on Change history View for Ap Approver Records',
              },
              {
                code: 'TSK1080',
                duration: 2.0,
                id: 1080.0,
                name: 'KVB AP Working on TAT and Ageing Report for Common summary and Bounce summary',
              },
            ],
          },
          {
            developer: {
              code: 'VS0291',
              first_check_in: 1704948529000.0,
              id: 129,
              last_check_in: 1704982695000.0,
              name: 'HARISH KUMAR D',
              total_hour: 9.29,
            },
            task: [
              {
                code: 'TSK957',
                duration: 1.0,
                id: 957.0,
                name: '1.KVB-Vendor Master  tax ,taxrate and subtax connected with backend checked flow',
              },
              {
                code: 'TSK956',
                duration: 7.2,
                id: 956.0,
                name: '1.MM -Bom Master Edit screen need add in UI  ',
              },
            ],
          },
          {
            developer: {
              code: 'VS0294',
              first_check_in: 1704948808000.0,
              id: 132,
              last_check_in: 1704981331000.0,
              name: 'MOHAN E',
              total_hour: 9.02,
            },
            task: [
              {
                code: 'TSK1032',
                duration: 8.0,
                id: 1032.0,
                name: '1.Task explaind by vignesh and analysed the how product and product template list creation(10:15-1:30)  2.bug fix in tasktemplate api(2:30-5:30 and 6:00-7:20)',
              },
            ],
          },
          {
            developer: {
              code: 'VS0295',
              first_check_in: 1704948775000.0,
              id: 133,
              last_check_in: null,
              name: 'SARAVANAN M',
              total_hour: 0.0,
            },
            task: [
              {
                code: 'TSK1050',
                duration: 4.0,
                id: 1050.0,
                name: 'prepared data for live payroilltest attendance  and master bank and bankbranch ',
              },
              {
                code: 'TSK1051',
                duration: 4.0,
                id: 1051.0,
                name: 'validation in payrolltest models',
              },
            ],
          },
          {
            developer: {
              code: 'VS0297',
              first_check_in: 1704948214000.0,
              id: 135,
              last_check_in: 1704982395000.0,
              name: 'KEERTHANA D',
              total_hour: 9.29,
            },
            task: [
              {
                code: 'TSK1046',
                duration: 8.0,
                id: 1046.0,
                name: 'SET THE VALIDATION FOR DURATION (ONLY EXISTS IN 24 HOURS) IN TIMESHEET ',
              },
            ],
          },
          {
            developer: {
              code: 'VS0300',
              first_check_in: 1704949461000.0,
              id: 138,
              last_check_in: 1704983435000.0,
              name: 'Faritha Banu K',
              total_hour: 9.26,
            },
            task: [
              {
                code: 'TSK1099',
                duration: 4.0,
                id: 1099.0,
                name: 'Analysis of Bug mentioned by Balaje',
              },
              {
                code: 'TSK1109',
                duration: 4.0,
                id: 1109.0,
                name: 'In the Onboard and Modification Draft vendor delete icon should be enabled after the save',
              },
            ],
          },
          {
            developer: {
              code: 'VS0306',
              first_check_in: 1704947721000.0,
              id: 143,
              last_check_in: 1704983810000.0,
              name: 'UMA DEVI P',
              total_hour: 10.01,
            },
            task: [
              {
                code: 'TSK1061',
                duration: 8.0,
                id: 1061.0,
                name: 'ARS convert the Rule master to be user friendly and CBS narration column to be split user friendly and FAS template value date , CBS date and added in FAS transaction table.',
              },
            ],
          },
          {
            developer: {
              code: 'VS0309',
              first_check_in: 1704951487000.0,
              id: 146,
              last_check_in: 1704980424000.0,
              name: 'BALAJI A',
              total_hour: 8.02,
            },
            task: [
              {
                code: 'TSK1111',
                duration: 8.0,
                id: 1111.0,
                name: 'The KVB SIT Server TA e-Claim  Bugzilla Points  Checking For  Comment  Updated ',
              },
            ],
          },
          {
            developer: {
              code: 'VS0310',
              first_check_in: 1704949315000.0,
              id: 147,
              last_check_in: 1704983861000.0,
              name: 'SANTHOSH V',
              total_hour: 9.35,
            },
            task: [
              {
                code: 'TSK878',
                duration: 1.0,
                id: 878.0,
                name: 'Manual Mapping Without choosing file',
              },
              {
                code: 'TSK879',
                duration: 1.0,
                id: 879.0,
                name: ' template save validation',
              },
              {
                code: 'TSK517',
                duration: 4.0,
                id: 517.0,
                name: 'LEAD UPLOAD SCREEN VALIDATION SET',
              },
              {
                code: 'TSK998',
                duration: 2.0,
                id: 998.0,
                name: 'leads upload screen  validation  set ',
              },
            ],
          },
          {
            developer: {
              code: 'VS0318',
              first_check_in: 1704946670000.0,
              id: 155,
              last_check_in: 1704983027000.0,
              name: 'NARESH M',
              total_hour: 10.05,
            },
            task: [
              {
                code: 'TSK818',
                duration: 8.0,
                id: 818.0,
                name: '#10100',
              },
            ],
          },
          {
            developer: {
              code: 'VS0319',
              first_check_in: 1704948702000.0,
              id: 156,
              last_check_in: 1704981595000.0,
              name: 'A . DOMNIC BOSCO',
              total_hour: 9.08,
            },
            task: [
              {
                code: 'TSK1016',
                duration: 4.0,
                id: 1016.0,
                name: 'In IB otp login screen when the user provide wrong otp ,then the resend otp does not work properly and resolve it',
              },
              {
                code: 'TSK1018',
                duration: 2.0,
                id: 1018.0,
                name: 'In ib otp screen the user type wrong otp the mobile number formfield reset automatically and resove the bug',
              },
              {
                code: 'TSK1019',
                duration: 2.0,
                id: 1019.0,
                name: 'In otp screen if user put wrong otp then the otp formfield does not reset automatically and resolve it',
              },
            ],
          },
          {
            developer: {
              code: 'VS0321',
              first_check_in: 1704948226000.0,
              id: 158,
              last_check_in: 1704981579000.0,
              name: 'DRAVID P',
              total_hour: 9.15,
            },
            task: [
              {
                code: 'TSK1003',
                duration: 2.0,
                id: 1003.0,
                name: 'TN_IB branch wise balance amount changes.',
              },
              {
                code: 'TSK1004',
                duration: 1.0,
                id: 1004.0,
                name: 'TN_IB  particular fetch balance amount changes.',
              },
              {
                code: 'TSK1005',
                duration: 2.0,
                id: 1005.0,
                name: 'creating parent record while new transfer create.',
              },
              {
                code: 'TSK1006',
                duration: 2.5,
                id: 1006.0,
                name: 'TN_IB Flow checking.',
              },
            ],
          },
          {
            developer: {
              code: 'VS0326',
              first_check_in: 1704947701000.0,
              id: 163,
              last_check_in: 1704981553000.0,
              name: 'VASANTHA MOHAN R',
              total_hour: 9.24,
            },
            task: [
              {
                code: 'TSK1010',
                duration: 2.0,
                id: 1010.0,
                name: '1. TNIB_LIB allocation edit and delete button validation and perticullar ID int into array for PARMS',
              },
              {
                code: 'TSK1011',
                duration: 2.1,
                id: 1011.0,
                name: 'TNIB_LIB Transfer screen save transfer by maker all fields are readonly property and amout issue identification during between branch',
              },
              {
                code: 'TSK1037',
                duration: 2.5,
                id: 1037.0,
                name: 'TNIB_LIB transfer and negative flow return and reject flow',
              },
            ],
          },
          {
            developer: {
              code: 'VS0333',
              first_check_in: 1704949115000.0,
              id: 170,
              last_check_in: 1704983061000.0,
              name: 'A MAXIN',
              total_hour: 9.25,
            },
            task: [
              {
                code: 'TSK874',
                duration: 2.0,
                id: 874.0,
                name: 'Back button not working in product view and Campaign view',
              },
              {
                code: 'TSK875',
                duration: 2.0,
                id: 875.0,
                name: 'Add label data not cleared in lead fields',
              },
              {
                code: 'TSK1038',
                duration: 4.0,
                id: 1038.0,
                name: 'CRM Master work group creation routing ',
              },
            ],
          },
          {
            developer: {
              code: 'VS0334',
              first_check_in: 1704948528000.0,
              id: 171,
              last_check_in: 1704982749000.0,
              name: 'DINESH KUMAR P',
              total_hour: 9.3,
            },
            task: [
              {
                code: 'TSK1029',
                duration: 8.0,
                id: 1029.0,
                name: '1)GOLD-PRS-Changing "NAC" Reference Name  to "company " that given in BE in calculation column reference field.\n2)GOLD-PRS-when Evaluate or Submit want to resend as "NAC"  to BE for calculating formula and also checking condition in summary list and replace where it is NAC in BE to change that to Company and shown in the table.',
              },
            ],
          },
          {
            developer: {
              code: 'VS0335',
              first_check_in: 1704950879000.0,
              id: 172,
              last_check_in: 1704980577000.0,
              name: 'M KARTHIGA',
              total_hour: 8.14,
            },
            task: [
              {
                code: 'TSK1044',
                duration: 8.0,
                id: 1044.0,
                name: 'Proofing- checking the flow for rules type based raw query in code and modified the query',
              },
            ],
          },
          {
            developer: {
              code: 'VS0336',
              first_check_in: 1704948535000.0,
              id: 173,
              last_check_in: 1704982740000.0,
              name: 'G GOKUL KUMAR',
              total_hour: 9.3,
            },
            task: [
              {
                code: 'TSK1036',
                duration: 8.0,
                id: 1036.0,
                name: '1)Create parameter api Parameter No. to be auto generated BE.\n2)Under Excel, instead of status number, words of "Active", "Inactive", "Rejected" to be updated BE.\n3)Coulmn reference name to be provided under each parameter in excel instead of number BE.\n4)Search option other than "Partner name" and "Agreement Type" is not working-fixed BE.\n5)Alteration Invoice summary api BE(added status,invoice_status,partner_id,count)',
              },
            ],
          },
          {
            developer: {
              code: 'VS0337',
              first_check_in: 1704947448000.0,
              id: 174,
              last_check_in: 1704981565000.0,
              name: 'HARISH E',
              total_hour: 9.28,
            },
            task: [
              {
                code: 'TSK1027',
                duration: 8.0,
                id: 1027.0,
                name: '\tChecking Gold PRS workflow in server and identify the errors and solve \n\t1)The dropdowns are hide in some screens  checked and solved that using ng-deep to all componets\n\t2)The reference of NAC changed to Company in calculation value summary .It changed via hard code in frontend ',
              },
            ],
          },
          {
            developer: {
              code: 'VS0338',
              first_check_in: 1704947684000.0,
              id: 175,
              last_check_in: 1704983853000.0,
              name: 'SRIMAN NARAYANAN S',
              total_hour: 10.02,
            },
            task: [
              {
                code: 'TSK1030',
                duration: 4.0,
                id: 1030.0,
                name: 'get an error in the entry details when the variables bs_code, cc_code, and others are None altered it to the default value of 0 in order to prevent issues.',
              },
              {
                code: 'TSK1025',
                duration: 4.0,
                id: 1025.0,
                name: 'modified the mistake that ecf_submit found and resolved by shortening the invoice crno ',
              },
            ],
          },
          {
            developer: {
              code: 'VS0340',
              first_check_in: 1704948000000.0,
              id: 238,
              last_check_in: 1704980640000.0,
              name: 'LOGESH M',
              total_hour: 9.03,
            },
            task: [
              {
                code: 'TSK980',
                duration: 4.0,
                id: 980.0,
                name: 'Integrity output download in excel format using s3 bucket ',
              },
              {
                code: 'TSK987',
                duration: 8.0,
                id: 987.0,
                name: 'Rule masters condition by user for Ars modifying the code',
              },
            ],
          },
          {
            developer: {
              code: 'VS0342',
              first_check_in: 1704947921000.0,
              id: 240,
              last_check_in: 1704981262000.0,
              name: 'ADHIKESAVAN',
              total_hour: 9.15,
            },
            task: [
              {
                code: 'TSK1031',
                duration: 7.0,
                id: 1031.0,
                name: " Worked in TAX, SUBTAX and TAXRATE Master.\n1. Created logs for all API's in Taxrate Master.\n2. Atomic and Transaction Rollback added  in Taxrate Master.\n3. Fixed issue in code generetion for create API in Taxrate Master.\n4. Created a fetch API in Taxrate Master.\n5. Created active and inactive status API for Tax and Subtax Master.\n6. Tested  all API's workflow Create, Update, Fetch and checked the audit table functions also",
              },
              {
                code: 'TSK745',
                duration: 1.0,
                id: 745.0,
                name: 'Tax ,Subtax and Taxrate master in micro',
              },
            ],
          },
          {
            developer: {
              code: 'VS0343',
              first_check_in: 1704949316000.0,
              id: 241,
              last_check_in: 1704983759000.0,
              name: 'SUBASH G',
              total_hour: 9.33,
            },
            task: [
              {
                code: 'TSK1033',
                duration: 4.0,
                id: 1033.0,
                name: 'Design of the attendance summary screen table and the summary of api call and validation\n',
              },
              {
                code: 'TSK1035',
                duration: 4.0,
                id: 1035.0,
                name: 'Bulk upload date validation in custom deduction, custom earnings, Payment Hold for create and edit',
              },
            ],
          },
          {
            developer: {
              code: 'VS0344',
              first_check_in: 1704949247000.0,
              id: 242,
              last_check_in: 1704983530000.0,
              name: 'KOUSHIK K',
              total_hour: 9.31,
            },
            task: [
              {
                code: 'TSK1056',
                duration: 3.0,
                id: 1056.0,
                name: 'salary task',
              },
              {
                code: 'TSK1058',
                duration: 1.5,
                id: 1058.0,
                name: 'Fetch employee details using log date and download in excel format',
              },
              {
                code: 'TSK1060',
                duration: 2.0,
                id: 1060.0,
                name: 'Get lead list api ',
              },
              {
                code: 'TSK1062',
                duration: 2.0,
                id: 1062.0,
                name: 'fetch employee duration using log date',
              },
            ],
          },
          {
            developer: {
              code: 'VS0345',
              first_check_in: 1704948518000.0,
              id: 243,
              last_check_in: 1704983542000.0,
              name: 'MADHAVAN M',
              total_hour: 9.43,
            },
            task: [
              {
                code: 'TSK1007',
                duration: 4.0,
                id: 1007.0,
                name: 'DRS Module - DRS Summary Component - Visibility - Flow Learning',
              },
              {
                code: 'TSK1105',
                duration: 2.5,
                id: 1105.0,
                name: 'KVB - DRS Module - Reportbuilder Component - Report Master/Header/Group/Type/Schedule Master - Tab Change',
              },
            ],
          },
          {
            developer: {
              code: 'VS0348',
              first_check_in: 1704948253000.0,
              id: 246,
              last_check_in: 1704982352000.0,
              name: 'RATHINA PRIYA M',
              total_hour: 9.28,
            },
            task: [
              {
                code: 'TSK1075',
                duration: 8.0,
                id: 1075.0,
                name: 'NAC project - learned about  userservice app authtoken code working flow ',
              },
            ],
          },
          {
            developer: {
              code: 'VS0353',
              first_check_in: 1704949564000.0,
              id: 251,
              last_check_in: 1704982954000.0,
              name: 'DEEPANCHAKKARAVARTHI C',
              total_hour: 9.16,
            },
            task: [
              {
                code: 'TSK1014',
                duration: 2.0,
                id: 1014.0,
                name: 'Drsservice - Report_Master /  Report_Header / Report_Group / Report_Type / Scheduler_Master Drop Down API bugs',
              },
              {
                code: 'TSK1015',
                duration: 1.0,
                id: 1015.0,
                name: 'Drsservice - Pagination change the content of the limit and data list modification',
              },
              {
                code: 'TSK1017',
                duration: 2.0,
                id: 1017.0,
                name: 'Drsservice - Paginator change the Response limit and Token API URL Bug',
              },
              {
                code: 'TSK1055',
                duration: 2.5,
                id: 1055.0,
                name: 'Drsservice - Report_header_list API Flow LEARNING',
              },
            ],
          },
        ],
      },
    ],
    pagination: {
      has_next: false,
      has_previous: false,
      index: 1,
      limit: 10,
    },
  };
}
