import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _72a501f8 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _482c2b58 = () => interopDefault(import('../pages/directory.vue' /* webpackChunkName: "pages/directory" */))
const _a155a3e8 = () => interopDefault(import('../pages/draft.vue' /* webpackChunkName: "pages/draft" */))
const _39a0dc71 = () => interopDefault(import('../pages/inbox.vue' /* webpackChunkName: "pages/inbox" */))
const _5c047fd4 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _75ee5dd5 = () => interopDefault(import('../pages/MyRequests.vue' /* webpackChunkName: "pages/MyRequests" */))
const _54ccffe2 = () => interopDefault(import('../pages/outbox.vue' /* webpackChunkName: "pages/outbox" */))
const _6810b154 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _a5e95d26 = () => interopDefault(import('../pages/records.vue' /* webpackChunkName: "pages/records" */))
const _bb275dae = () => interopDefault(import('../pages/requests.vue' /* webpackChunkName: "pages/requests" */))
const _1d0a71bc = () => interopDefault(import('../pages/creation/_fileplan/index.vue' /* webpackChunkName: "pages/creation/_fileplan/index" */))
const _2f0be14b = () => interopDefault(import('../pages/disposal/_fileplan.vue' /* webpackChunkName: "pages/disposal/_fileplan" */))
const _3c29ac3c = () => interopDefault(import('../pages/docinfo/_id.vue' /* webpackChunkName: "pages/docinfo/_id" */))
const _53fbeb3f = () => interopDefault(import('../pages/fileplan/_fileplan.vue' /* webpackChunkName: "pages/fileplan/_fileplan" */))
const _41123736 = () => interopDefault(import('../pages/maintenance/_fileplan/index.vue' /* webpackChunkName: "pages/maintenance/_fileplan/index" */))
const _06aab904 = () => interopDefault(import('../pages/usage/_fileplan/index.vue' /* webpackChunkName: "pages/usage/_fileplan/index" */))
const _36d56acc = () => interopDefault(import('../pages/previews/_id/Acceptance_of_An_Offer/print.vue' /* webpackChunkName: "pages/previews/_id/Acceptance_of_An_Offer/print" */))
const _1725222e = () => interopDefault(import('../pages/previews/_id/acknowledgementOfDebt/print.vue' /* webpackChunkName: "pages/previews/_id/acknowledgementOfDebt/print" */))
const _82a64624 = () => interopDefault(import('../pages/previews/_id/agenda/print.vue' /* webpackChunkName: "pages/previews/_id/agenda/print" */))
const _1b677832 = () => interopDefault(import('../pages/previews/_id/AnnualPerformanceAssessmentsHOD/print.vue' /* webpackChunkName: "pages/previews/_id/AnnualPerformanceAssessmentsHOD/print" */))
const _617d8a0a = () => interopDefault(import('../pages/previews/_id/applicationForLeaveOfAbsence/print.vue' /* webpackChunkName: "pages/previews/_id/applicationForLeaveOfAbsence/print" */))
const _d28b44ea = () => interopDefault(import('../pages/previews/_id/attendance/print.vue' /* webpackChunkName: "pages/previews/_id/attendance/print" */))
const _587380c1 = () => interopDefault(import('../pages/previews/_id/circular/print.vue' /* webpackChunkName: "pages/previews/_id/circular/print" */))
const _88044ac4 = () => interopDefault(import('../pages/previews/_id/commitmentRegisterForm/print.vue' /* webpackChunkName: "pages/previews/_id/commitmentRegisterForm/print" */))
const _78ac51ca = () => interopDefault(import('../pages/previews/_id/Consolidated_Evaluation_Sheet/print.vue' /* webpackChunkName: "pages/previews/_id/Consolidated_Evaluation_Sheet/print" */))
const _06e0de34 = () => interopDefault(import('../pages/previews/_id/Evaluation_for_Oral_Presentation/print.vue' /* webpackChunkName: "pages/previews/_id/Evaluation_for_Oral_Presentation/print" */))
const _56b6194a = () => interopDefault(import('../pages/previews/_id/Evaluation_form_for_Technical_Exercise/print.vue' /* webpackChunkName: "pages/previews/_id/Evaluation_form_for_Technical_Exercise/print" */))
const _69958072 = () => interopDefault(import('../pages/previews/_id/evaluationReport/print.vue' /* webpackChunkName: "pages/previews/_id/evaluationReport/print" */))
const _b7e80ad6 = () => interopDefault(import('../pages/previews/_id/HODPMDSCalculator/print.vue' /* webpackChunkName: "pages/previews/_id/HODPMDSCalculator/print" */))
const _4245239b = () => interopDefault(import('../pages/previews/_id/HRD_Implementation_Plan/print.vue' /* webpackChunkName: "pages/previews/_id/HRD_Implementation_Plan/print" */))
const _1457b7e8 = () => interopDefault(import('../pages/previews/_id/Individual_Panel_Evaluation_Form/print.vue' /* webpackChunkName: "pages/previews/_id/Individual_Panel_Evaluation_Form/print" */))
const _56edf1fe = () => interopDefault(import('../pages/previews/_id/Job_Description_template/print.vue' /* webpackChunkName: "pages/previews/_id/Job_Description_template/print" */))
const _c3fdcb78 = () => interopDefault(import('../pages/previews/_id/Job_Description/print.vue' /* webpackChunkName: "pages/previews/_id/Job_Description/print" */))
const _73cee764 = () => interopDefault(import('../pages/previews/_id/LeaveRegister/print.vue' /* webpackChunkName: "pages/previews/_id/LeaveRegister/print" */))
const _7a2d0c88 = () => interopDefault(import('../pages/previews/_id/letter/print.vue' /* webpackChunkName: "pages/previews/_id/letter/print" */))
const _34d440c8 = () => interopDefault(import('../pages/previews/_id/memo/print.vue' /* webpackChunkName: "pages/previews/_id/memo/print" */))
const _177fd2ae = () => interopDefault(import('../pages/previews/_id/minutes/print.vue' /* webpackChunkName: "pages/previews/_id/minutes/print" */))
const _5cabf8aa = () => interopDefault(import('../pages/previews/_id/Monthly_Training_Report_and_Plan/print.vue' /* webpackChunkName: "pages/previews/_id/Monthly_Training_Report_and_Plan/print" */))
const _b9099636 = () => interopDefault(import('../pages/previews/_id/operationalPlan/print.vue' /* webpackChunkName: "pages/previews/_id/operationalPlan/print" */))
const _70a46f6e = () => interopDefault(import('../pages/previews/_id/Panel_Declaration/print.vue' /* webpackChunkName: "pages/previews/_id/Panel_Declaration/print" */))
const _11ebc7f8 = () => interopDefault(import('../pages/previews/_id/Recruitment_Form_Annexure_A/print.vue' /* webpackChunkName: "pages/previews/_id/Recruitment_Form_Annexure_A/print" */))
const _747c88f8 = () => interopDefault(import('../pages/previews/_id/Recruitment_Form_Annexure_B1/print.vue' /* webpackChunkName: "pages/previews/_id/Recruitment_Form_Annexure_B1/print" */))
const _4d510f72 = () => interopDefault(import('../pages/previews/_id/Reference_Check_Template/print.vue' /* webpackChunkName: "pages/previews/_id/Reference_Check_Template/print" */))
const _5cbec684 = () => interopDefault(import('../pages/previews/_id/Score_Sheet_For_Interviews_Level_1_12/print.vue' /* webpackChunkName: "pages/previews/_id/Score_Sheet_For_Interviews_Level_1_12/print" */))
const _0885fed7 = () => interopDefault(import('../pages/previews/_id/Score_Sheet_For_Interviews/print.vue' /* webpackChunkName: "pages/previews/_id/Score_Sheet_For_Interviews/print" */))
const _b41da8b8 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_number.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_number" */))
const _784fd710 = () => interopDefault(import('../pages/maintenance/_fileplan/subseries/files/_ref.vue' /* webpackChunkName: "pages/maintenance/_fileplan/subseries/files/_ref" */))
const _144e0084 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/Acceptance_of_An_Offer/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/Acceptance_of_An_Offer/index" */))
const _46851e8e = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/accessControlForm/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/accessControlForm/index" */))
const _feb19540 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/acknowledgementOfDebt/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/acknowledgementOfDebt/index" */))
const _4e09f8a6 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/agenda/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/agenda/index" */))
const _13459f50 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/AnnualAssessmentHOD/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/AnnualAssessmentHOD/index" */))
const _073da2bd = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/annualDistrictPlanningManagement&Monitoring/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/annualDistrictPlanningManagement&Monitoring/index" */))
const _7ccd6246 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/annualDistrictPlanningManagement&MonitoringTerm2-4/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/annualDistrictPlanningManagement&MonitoringTerm2-4/index" */))
const _3735e054 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/annualPerformancePlan/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/annualPerformancePlan/index" */))
const _77f7fc6d = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/annualPerformancePlanQuarterlyReport/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/annualPerformancePlanQuarterlyReport/index" */))
const _1c990582 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/applicationForLeaveOfAbsence/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/applicationForLeaveOfAbsence/index" */))
const _177e7e5e = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/AssetDataRecording/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/AssetDataRecording/index" */))
const _392fea9b = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/AssetMovement/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/AssetMovement/index" */))
const _94ea2ed8 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/AssetRegisterTable3/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/AssetRegisterTable3/index" */))
const _6f26578c = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/AssetsMovement/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/AssetsMovement/index" */))
const _78f9907a = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/attendance/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/attendance/index" */))
const _d61fc4a8 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/AuditReportOnMobileClassrooms/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/AuditReportOnMobileClassrooms/index" */))
const _3d91ef3c = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/checklist/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/checklist/index" */))
const _0be6c794 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/CheckListForAudit/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/CheckListForAudit/index" */))
const _4cf8fbbd = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/checklistForSiteVisit/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/checklistForSiteVisit/index" */))
const _5c00e3b9 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/circular/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/circular/index" */))
const _0456e99c = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/claimFormFuel/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/claimFormFuel/index" */))
const _f3529944 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/clearanceLetter/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/clearanceLetter/index" */))
const _1e98dae4 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/collectionOfRedundantOrUnserviceableAssetsByDisposalUnit/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/collectionOfRedundantOrUnserviceableAssetsByDisposalUnit/index" */))
const _cd131f54 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/commitmentRegisterForm/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/commitmentRegisterForm/index" */))
const _37b887fc = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/Consolidated_Evaluation_Sheet/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/Consolidated_Evaluation_Sheet/index" */))
const _5ccccde5 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/DataCollectionTable1/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/DataCollectionTable1/index" */))
const _505ea7a5 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/DiscussionandMotivationForm/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/DiscussionandMotivationForm/index" */))
const _591cce32 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/disposalRegisterForTheHeadOffice/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/disposalRegisterForTheHeadOffice/index" */))
const _79743be7 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/employeeSecurityAccessControl/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/employeeSecurityAccessControl/index" */))
const _d49b8fa8 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/Evaluation_for_Oral_Presentation/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/Evaluation_for_Oral_Presentation/index" */))
const _3fd3adfc = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/Evaluation_form_for_Technical_Exercise/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/Evaluation_form_for_Technical_Exercise/index" */))
const _49ed386a = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/Evaluationreport/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/Evaluationreport/index" */))
const _d82a44d0 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/evaluationReport_ExamDistributionPoint/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/evaluationReport_ExamDistributionPoint/index" */))
const _f6a93b96 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/evidenceForminstitutionSupportVisit/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/evidenceForminstitutionSupportVisit/index" */))
const _758e8535 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/governmentVehiclesToBeDisposed/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/governmentVehiclesToBeDisposed/index" */))
const _ac40cfb4 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/HandingTakingOverCertificate/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/HandingTakingOverCertificate/index" */))
const _5a14d773 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/HandOverCertification/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/HandOverCertification/index" */))
const _0b6c4772 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/HODPMDSCalculator/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/HODPMDSCalculator/index" */))
const _2a97878d = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/HRD_Implementation_Plan/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/HRD_Implementation_Plan/index" */))
const _49d224f2 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/implementationPlanForTheAmended/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/implementationPlanForTheAmended/index" */))
const _b9addc40 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/Individual_Panel_Evaluation_Form/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/Individual_Panel_Evaluation_Form/index" */))
const _007db93c = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/invitationforbids/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/invitationforbids/index" */))
const _84d6be5a = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/iternaryForMiddleManagementOfficials/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/iternaryForMiddleManagementOfficials/index" */))
const _7418843b = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/iternaryLogSheetOfOfficialTrips/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/iternaryLogSheetOfOfficialTrips/index" */))
const _41b31b36 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/Job_Description/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/Job_Description/index" */))
const _0d3b63f9 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/Job_Description_template/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/Job_Description_template/index" */))
const _dc24469a = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/leave/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/leave/index" */))
const _5bdfc61a = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/leave_checklist/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/leave_checklist/index" */))
const _638c22a9 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/LeaveChecklist/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/LeaveChecklist/index" */))
const _35f3d796 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/LeaveRegister/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/LeaveRegister/index" */))
const _098a2840 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/letter/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/letter/index" */))
const _424c37d8 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/memo/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/memo/index" */))
const _0e8e744e = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/memo_cover_transactions_below30000/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/memo_cover_transactions_below30000/index" */))
const _1cfd0d68 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/memoCessionAgreementEndorsement/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/memoCessionAgreementEndorsement/index" */))
const _c2ac1112 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/MidYearAssessmentForHOD/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/MidYearAssessmentForHOD/index" */))
const _673eb49b = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/minutes/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/minutes/index" */))
const _607b5da3 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/Monthly_Training_Report_and_Plan/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/Monthly_Training_Report_and_Plan/index" */))
const _1c4aa09e = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/noticeoftermination/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/noticeoftermination/index" */))
const _5e01878e = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/oathOfSecrecy/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/oathOfSecrecy/index" */))
const _472d35d7 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/operationalPlan/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/operationalPlan/index" */))
const _1deba9fb = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/Panel_Declaration/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/Panel_Declaration/index" */))
const _bba40870 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/PerformanceAgreementForHOD/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/PerformanceAgreementForHOD/index" */))
const _9e43c720 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/personelAcessControl/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/personelAcessControl/index" */))
const _3edae82e = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/quarterlyReportingTemplate/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/quarterlyReportingTemplate/index" */))
const _0ef73d6a = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/Recruitment_Form_Annexure_A/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/Recruitment_Form_Annexure_A/index" */))
const _fe459208 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/Recruitment_Form_Annexure_B1/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/Recruitment_Form_Annexure_B1/index" */))
const _1209d53f = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/Reference_Check_Template/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/Reference_Check_Template/index" */))
const _12ed6220 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/RemurativeWorkoutSidePublicService/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/RemurativeWorkoutSidePublicService/index" */))
const _38ad14dc = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/RequisitionForm/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/RequisitionForm/index" */))
const _779858d3 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/riskManagementProfile/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/riskManagementProfile/index" */))
const _4ea3e7ea = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/schemeBClaimForm1/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/schemeBClaimForm1/index" */))
const _38eecaaa = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/schemeBClaimForm2/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/schemeBClaimForm2/index" */))
const _b4ea02a8 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/SchoolLevelMonitoringTool/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/SchoolLevelMonitoringTool/index" */))
const _5709bf0e = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/SchoolMonitoringTool/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/SchoolMonitoringTool/index" */))
const _95c559e2 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/Score_Sheet_For_Interviews/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/Score_Sheet_For_Interviews/index" */))
const _1763f5f0 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/Score_Sheet_For_Interviews_Level_1_12/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/Score_Sheet_For_Interviews_Level_1_12/index" */))
const _2df823d8 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/SecurityClearance/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/SecurityClearance/index" */))
const _43b4f574 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/SecurityClearanceZ204/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/SecurityClearanceZ204/index" */))
const _c637fa16 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/siteInspection/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/siteInspection/index" */))
const _285d439a = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/specification_form/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/specification_form/index" */))
const _41fcf78e = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/SSAVettingRequest/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/SSAVettingRequest/index" */))
const _3aeab892 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/standardOperatingProceduresApp/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/standardOperatingProceduresApp/index" */))
const _5effc88f = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/summaryOfKillometersTravelled/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/summaryOfKillometersTravelled/index" */))
const _1ca90371 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/supplychainmanagement/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/supplychainmanagement/index" */))
const _121ccfa1 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/temporaryIncapacityLeave/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/temporaryIncapacityLeave/index" */))
const _1ad95932 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/Term3SchoolRM/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/Term3SchoolRM/index" */))
const _cb83b502 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/transferOfAssetsBoughtOnBehalfOfSchools/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/transferOfAssetsBoughtOnBehalfOfSchools/index" */))
const _d7d97950 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/transportClaimForms/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/transportClaimForms/index" */))
const _2283cda7 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/TransportClaimTemplate/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/TransportClaimTemplate/index" */))
const _bdc5bed2 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/treasuryAssetsNewlyBarcordedLog/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/treasuryAssetsNewlyBarcordedLog/index" */))
const _24e340d8 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/treasuryLocationControlSheet/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/treasuryLocationControlSheet/index" */))
const _311a4ca8 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/voucherRequisition/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/voucherRequisition/index" */))
const _18f6b152 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/weeklyProgramme/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/weeklyProgramme/index" */))
const _043256c4 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/weeklyTravelPlan/index.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/weeklyTravelPlan/index" */))
const _dc95de14 = () => interopDefault(import('../pages/creation/_fileplan/subseries/templates/_ref/letter/_docId.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/templates/_ref/letter/_docId" */))
const _e43d9168 = () => interopDefault(import('../pages/creation/_fileplan/subseries/_id.vue' /* webpackChunkName: "pages/creation/_fileplan/subseries/_id" */))
const _0cf0e2c6 = () => interopDefault(import('../pages/maintenance/_fileplan/subseries/_id.vue' /* webpackChunkName: "pages/maintenance/_fileplan/subseries/_id" */))
const _4bc7a233 = () => interopDefault(import('../pages/previews/_id/Acceptance_of_An_Offer/_location.vue' /* webpackChunkName: "pages/previews/_id/Acceptance_of_An_Offer/_location" */))
const _f66e4ed6 = () => interopDefault(import('../pages/previews/_id/acknowledgementOfDebt/_location.vue' /* webpackChunkName: "pages/previews/_id/acknowledgementOfDebt/_location" */))
const _58753355 = () => interopDefault(import('../pages/previews/_id/agenda/_location.vue' /* webpackChunkName: "pages/previews/_id/agenda/_location" */))
const _4fa675ce = () => interopDefault(import('../pages/previews/_id/AnnualPerformanceAssessmentsHOD/_location.vue' /* webpackChunkName: "pages/previews/_id/AnnualPerformanceAssessmentsHOD/_location" */))
const _6eeeefea = () => interopDefault(import('../pages/previews/_id/annualPerformancePlan/_location.vue' /* webpackChunkName: "pages/previews/_id/annualPerformancePlan/_location" */))
const _96790248 = () => interopDefault(import('../pages/previews/_id/annualPerformancePlanQuarterlyReport/_location.vue' /* webpackChunkName: "pages/previews/_id/annualPerformancePlanQuarterlyReport/_location" */))
const _ca9c1b1e = () => interopDefault(import('../pages/previews/_id/applicationForLeaveOfAbsence/_location.vue' /* webpackChunkName: "pages/previews/_id/applicationForLeaveOfAbsence/_location" */))
const _47b63280 = () => interopDefault(import('../pages/previews/_id/AssetDataRecording/_location.vue' /* webpackChunkName: "pages/previews/_id/AssetDataRecording/_location" */))
const _dd8fd1d8 = () => interopDefault(import('../pages/previews/_id/AssetMovement/_loaction.vue' /* webpackChunkName: "pages/previews/_id/AssetMovement/_loaction" */))
const _7976f289 = () => interopDefault(import('../pages/previews/_id/AssetRegisterTable3/_location.vue' /* webpackChunkName: "pages/previews/_id/AssetRegisterTable3/_location" */))
const _76671d72 = () => interopDefault(import('../pages/previews/_id/attendance/_location.vue' /* webpackChunkName: "pages/previews/_id/attendance/_location" */))
const _5e7bd8b6 = () => interopDefault(import('../pages/previews/_id/AuditReportOnMobileClassrooms/_loaction.vue' /* webpackChunkName: "pages/previews/_id/AuditReportOnMobileClassrooms/_loaction" */))
const _550021d2 = () => interopDefault(import('../pages/previews/_id/checklist/_location.vue' /* webpackChunkName: "pages/previews/_id/checklist/_location" */))
const _a833af1c = () => interopDefault(import('../pages/previews/_id/checklistForSiteVisit/_location.vue' /* webpackChunkName: "pages/previews/_id/checklistForSiteVisit/_location" */))
const _b86094b0 = () => interopDefault(import('../pages/previews/_id/circular/_location.vue' /* webpackChunkName: "pages/previews/_id/circular/_location" */))
const _0a32cf32 = () => interopDefault(import('../pages/previews/_id/claimFormFuel/_location.vue' /* webpackChunkName: "pages/previews/_id/claimFormFuel/_location" */))
const _696a19d3 = () => interopDefault(import('../pages/previews/_id/clearanceLetter/_location.vue' /* webpackChunkName: "pages/previews/_id/clearanceLetter/_location" */))
const _653c2d17 = () => interopDefault(import('../pages/previews/_id/collectionOfRedundantOrUnserviceableAssetsByDisposalUnit/_loaction.vue' /* webpackChunkName: "pages/previews/_id/collectionOfRedundantOrUnserviceableAssetsByDisposalUnit/_loaction" */))
const _24afd905 = () => interopDefault(import('../pages/previews/_id/commitmentRegisterForm/_location.vue' /* webpackChunkName: "pages/previews/_id/commitmentRegisterForm/_location" */))
const _69b6da31 = () => interopDefault(import('../pages/previews/_id/Consolidated_Evaluation_Sheet/_location.vue' /* webpackChunkName: "pages/previews/_id/Consolidated_Evaluation_Sheet/_location" */))
const _31586358 = () => interopDefault(import('../pages/previews/_id/DataCollectionTable1/_location.vue' /* webpackChunkName: "pages/previews/_id/DataCollectionTable1/_location" */))
const _489543cc = () => interopDefault(import('../pages/previews/_id/DiscussionandMotivationForm/_location.vue' /* webpackChunkName: "pages/previews/_id/DiscussionandMotivationForm/_location" */))
const _8dc176be = () => interopDefault(import('../pages/previews/_id/disposalRegisterForTheHeadOffice/_location.vue' /* webpackChunkName: "pages/previews/_id/disposalRegisterForTheHeadOffice/_location" */))
const _3d50a09c = () => interopDefault(import('../pages/previews/_id/employeeSecurityAccessControl/_location.vue' /* webpackChunkName: "pages/previews/_id/employeeSecurityAccessControl/_location" */))
const _789b219b = () => interopDefault(import('../pages/previews/_id/Evaluation_for_Oral_Presentation/_location.vue' /* webpackChunkName: "pages/previews/_id/Evaluation_for_Oral_Presentation/_location" */))
const _1690e1b1 = () => interopDefault(import('../pages/previews/_id/Evaluation_form_for_Technical_Exercise/_location.vue' /* webpackChunkName: "pages/previews/_id/Evaluation_form_for_Technical_Exercise/_location" */))
const _4f9874d9 = () => interopDefault(import('../pages/previews/_id/evaluationReport/_location.vue' /* webpackChunkName: "pages/previews/_id/evaluationReport/_location" */))
const _ccf024ac = () => interopDefault(import('../pages/previews/_id/evidenceForminstitutionSupportVisit/_location.vue' /* webpackChunkName: "pages/previews/_id/evidenceForminstitutionSupportVisit/_location" */))
const _1090a964 = () => interopDefault(import('../pages/previews/_id/governmentVehiclesToBeDisposed/_location.vue' /* webpackChunkName: "pages/previews/_id/governmentVehiclesToBeDisposed/_location" */))
const _27669315 = () => interopDefault(import('../pages/previews/_id/HandingTakingOverCertificate/_location.vue' /* webpackChunkName: "pages/previews/_id/HandingTakingOverCertificate/_location" */))
const _68bd8db0 = () => interopDefault(import('../pages/previews/_id/HandOverCertification/_location.vue' /* webpackChunkName: "pages/previews/_id/HandOverCertification/_location" */))
const _182f257c = () => interopDefault(import('../pages/previews/_id/HODPMDSCalculator/_location.vue' /* webpackChunkName: "pages/previews/_id/HODPMDSCalculator/_location" */))
const _34005b82 = () => interopDefault(import('../pages/previews/_id/HRD_Implementation_Plan/_location.vue' /* webpackChunkName: "pages/previews/_id/HRD_Implementation_Plan/_location" */))
const _5233fd62 = () => interopDefault(import('../pages/previews/_id/Individual_Panel_Evaluation_Form/_location.vue' /* webpackChunkName: "pages/previews/_id/Individual_Panel_Evaluation_Form/_location" */))
const _4de8ff7c = () => interopDefault(import('../pages/previews/_id/iternaryForMiddleManagementOfficials/_location.vue' /* webpackChunkName: "pages/previews/_id/iternaryForMiddleManagementOfficials/_location" */))
const _b3d923a0 = () => interopDefault(import('../pages/previews/_id/iternaryLogSheetOfOfficialTrips/_location.vue' /* webpackChunkName: "pages/previews/_id/iternaryLogSheetOfOfficialTrips/_location" */))
const _71381be8 = () => interopDefault(import('../pages/previews/_id/Job_Description_template/_location.vue' /* webpackChunkName: "pages/previews/_id/Job_Description_template/_location" */))
const _63c254aa = () => interopDefault(import('../pages/previews/_id/Job_Description/_location.vue' /* webpackChunkName: "pages/previews/_id/Job_Description/_location" */))
const _400112cb = () => interopDefault(import('../pages/previews/_id/LeaveRegister/_location.vue' /* webpackChunkName: "pages/previews/_id/LeaveRegister/_location" */))
const _1a7ff422 = () => interopDefault(import('../pages/previews/_id/letter/_location.vue' /* webpackChunkName: "pages/previews/_id/letter/_location" */))
const _08a12f03 = () => interopDefault(import('../pages/previews/_id/memo/_location.vue' /* webpackChunkName: "pages/previews/_id/memo/_location" */))
const _7824c66c = () => interopDefault(import('../pages/previews/_id/MidYearAssessmentForHOD/_location.vue' /* webpackChunkName: "pages/previews/_id/MidYearAssessmentForHOD/_location" */))
const _8be1d0e0 = () => interopDefault(import('../pages/previews/_id/minutes/_location.vue' /* webpackChunkName: "pages/previews/_id/minutes/_location" */))
const _725298dc = () => interopDefault(import('../pages/previews/_id/Monthly_Training_Report_and_Plan/_location.vue' /* webpackChunkName: "pages/previews/_id/Monthly_Training_Report_and_Plan/_location" */))
const _30992424 = () => interopDefault(import('../pages/previews/_id/oathOfSecrecy/_location.vue' /* webpackChunkName: "pages/previews/_id/oathOfSecrecy/_location" */))
const _044e9068 = () => interopDefault(import('../pages/previews/_id/operationalPlan/_location.vue' /* webpackChunkName: "pages/previews/_id/operationalPlan/_location" */))
const _53ea0da0 = () => interopDefault(import('../pages/previews/_id/Panel_Declaration/_location.vue' /* webpackChunkName: "pages/previews/_id/Panel_Declaration/_location" */))
const _1a54dcf7 = () => interopDefault(import('../pages/previews/_id/PerformanceAgreementForHOD/_location.vue' /* webpackChunkName: "pages/previews/_id/PerformanceAgreementForHOD/_location" */))
const _0942c52e = () => interopDefault(import('../pages/previews/_id/personelAccessControl/_location.vue' /* webpackChunkName: "pages/previews/_id/personelAccessControl/_location" */))
const _75c27498 = () => interopDefault(import('../pages/previews/_id/quarterlyReportingTemplate/_location.vue' /* webpackChunkName: "pages/previews/_id/quarterlyReportingTemplate/_location" */))
const _6658ed42 = () => interopDefault(import('../pages/previews/_id/Recruitment_Form_Annexure_A/_location.vue' /* webpackChunkName: "pages/previews/_id/Recruitment_Form_Annexure_A/_location" */))
const _13a6522a = () => interopDefault(import('../pages/previews/_id/Recruitment_Form_Annexure_B1/_location.vue' /* webpackChunkName: "pages/previews/_id/Recruitment_Form_Annexure_B1/_location" */))
const _c97f0ba4 = () => interopDefault(import('../pages/previews/_id/Reference_Check_Template/_location.vue' /* webpackChunkName: "pages/previews/_id/Reference_Check_Template/_location" */))
const _e275eaf0 = () => interopDefault(import('../pages/previews/_id/riskManagementProfile/_location.vue' /* webpackChunkName: "pages/previews/_id/riskManagementProfile/_location" */))
const _5384a79f = () => interopDefault(import('../pages/previews/_id/schemeBClaimForm1/_location.vue' /* webpackChunkName: "pages/previews/_id/schemeBClaimForm1/_location" */))
const _a53fdc40 = () => interopDefault(import('../pages/previews/_id/schemeBClaimForm2/_location.vue' /* webpackChunkName: "pages/previews/_id/schemeBClaimForm2/_location" */))
const _48e48b25 = () => interopDefault(import('../pages/previews/_id/Score_Sheet_For_Interviews_Level_1_12/_location.vue' /* webpackChunkName: "pages/previews/_id/Score_Sheet_For_Interviews_Level_1_12/_location" */))
const _28ad8e84 = () => interopDefault(import('../pages/previews/_id/Score_Sheet_For_Interviews/_location.vue' /* webpackChunkName: "pages/previews/_id/Score_Sheet_For_Interviews/_location" */))
const _954586e6 = () => interopDefault(import('../pages/previews/_id/SecurityClearance/_location.vue' /* webpackChunkName: "pages/previews/_id/SecurityClearance/_location" */))
const _e7df22ae = () => interopDefault(import('../pages/previews/_id/SecurityClearanceZ204/_location.vue' /* webpackChunkName: "pages/previews/_id/SecurityClearanceZ204/_location" */))
const _3fb47db8 = () => interopDefault(import('../pages/previews/_id/siteInspection/_location.vue' /* webpackChunkName: "pages/previews/_id/siteInspection/_location" */))
const _40d228c9 = () => interopDefault(import('../pages/previews/_id/specification_form/_location.vue' /* webpackChunkName: "pages/previews/_id/specification_form/_location" */))
const _080d846e = () => interopDefault(import('../pages/previews/_id/SSAVettingRequest/_location.vue' /* webpackChunkName: "pages/previews/_id/SSAVettingRequest/_location" */))
const _4d75b6e6 = () => interopDefault(import('../pages/previews/_id/standardOperatingProceduresApp/_location.vue' /* webpackChunkName: "pages/previews/_id/standardOperatingProceduresApp/_location" */))
const _23759944 = () => interopDefault(import('../pages/previews/_id/summaryOfKillometersTravelled/_location.vue' /* webpackChunkName: "pages/previews/_id/summaryOfKillometersTravelled/_location" */))
const _0aab7390 = () => interopDefault(import('../pages/previews/_id/temporaryIncapacityLeave/_location.vue' /* webpackChunkName: "pages/previews/_id/temporaryIncapacityLeave/_location" */))
const _36adea74 = () => interopDefault(import('../pages/previews/_id/transferOfAssetsBoughtOnBehalfOfSchools/_location.vue' /* webpackChunkName: "pages/previews/_id/transferOfAssetsBoughtOnBehalfOfSchools/_location" */))
const _59e76966 = () => interopDefault(import('../pages/previews/_id/transportClaimForms/_location.vue' /* webpackChunkName: "pages/previews/_id/transportClaimForms/_location" */))
const _fb87b454 = () => interopDefault(import('../pages/previews/_id/TransportClaimTemplate/_location.vue' /* webpackChunkName: "pages/previews/_id/TransportClaimTemplate/_location" */))
const _4c7a7c8c = () => interopDefault(import('../pages/previews/_id/treasuryAssetsNewlyBarcordedLog/_location.vue' /* webpackChunkName: "pages/previews/_id/treasuryAssetsNewlyBarcordedLog/_location" */))
const _433018fa = () => interopDefault(import('../pages/previews/_id/treasuryLocationControlSheet/_location.vue' /* webpackChunkName: "pages/previews/_id/treasuryLocationControlSheet/_location" */))
const _33c92d68 = () => interopDefault(import('../pages/previews/_id/weeklyProgramme/_location.vue' /* webpackChunkName: "pages/previews/_id/weeklyProgramme/_location" */))
const _5233a1e6 = () => interopDefault(import('../pages/previews/_id/weeklyTravelPlan/_location.vue' /* webpackChunkName: "pages/previews/_id/weeklyTravelPlan/_location" */))
const _47b7b1ef = () => interopDefault(import('../pages/usage/_fileplan/_id/index.vue' /* webpackChunkName: "pages/usage/_fileplan/_id/index" */))
const _db464686 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _72a501f8,
      name: "about"
    }, {
      path: "/directory",
      component: _482c2b58,
      name: "directory"
    }, {
      path: "/draft",
      component: _a155a3e8,
      name: "draft"
    }, {
      path: "/inbox",
      component: _39a0dc71,
      name: "inbox"
    }, {
      path: "/login",
      component: _5c047fd4,
      name: "login"
    }, {
      path: "/MyRequests",
      component: _75ee5dd5,
      name: "MyRequests"
    }, {
      path: "/outbox",
      component: _54ccffe2,
      name: "outbox"
    }, {
      path: "/profile",
      component: _6810b154,
      name: "profile"
    }, {
      path: "/records",
      component: _a5e95d26,
      name: "records"
    }, {
      path: "/requests",
      component: _bb275dae,
      name: "requests"
    }, {
      path: "/creation/:fileplan?",
      component: _1d0a71bc,
      name: "creation-fileplan"
    }, {
      path: "/disposal/:fileplan?",
      component: _2f0be14b,
      name: "disposal-fileplan"
    }, {
      path: "/docinfo/:id?",
      component: _3c29ac3c,
      name: "docinfo-id"
    }, {
      path: "/fileplan/:fileplan?",
      component: _53fbeb3f,
      name: "fileplan-fileplan"
    }, {
      path: "/maintenance/:fileplan?",
      component: _41123736,
      name: "maintenance-fileplan"
    }, {
      path: "/usage/:fileplan?",
      component: _06aab904,
      name: "usage-fileplan"
    }, {
      path: "/previews/:id?/Acceptance_of_An_Offer/print",
      component: _36d56acc,
      name: "previews-id-Acceptance_of_An_Offer-print"
    }, {
      path: "/previews/:id?/acknowledgementOfDebt/print",
      component: _1725222e,
      name: "previews-id-acknowledgementOfDebt-print"
    }, {
      path: "/previews/:id?/agenda/print",
      component: _82a64624,
      name: "previews-id-agenda-print"
    }, {
      path: "/previews/:id?/AnnualPerformanceAssessmentsHOD/print",
      component: _1b677832,
      name: "previews-id-AnnualPerformanceAssessmentsHOD-print"
    }, {
      path: "/previews/:id?/applicationForLeaveOfAbsence/print",
      component: _617d8a0a,
      name: "previews-id-applicationForLeaveOfAbsence-print"
    }, {
      path: "/previews/:id?/attendance/print",
      component: _d28b44ea,
      name: "previews-id-attendance-print"
    }, {
      path: "/previews/:id?/circular/print",
      component: _587380c1,
      name: "previews-id-circular-print"
    }, {
      path: "/previews/:id?/commitmentRegisterForm/print",
      component: _88044ac4,
      name: "previews-id-commitmentRegisterForm-print"
    }, {
      path: "/previews/:id?/Consolidated_Evaluation_Sheet/print",
      component: _78ac51ca,
      name: "previews-id-Consolidated_Evaluation_Sheet-print"
    }, {
      path: "/previews/:id?/Evaluation_for_Oral_Presentation/print",
      component: _06e0de34,
      name: "previews-id-Evaluation_for_Oral_Presentation-print"
    }, {
      path: "/previews/:id?/Evaluation_form_for_Technical_Exercise/print",
      component: _56b6194a,
      name: "previews-id-Evaluation_form_for_Technical_Exercise-print"
    }, {
      path: "/previews/:id?/evaluationReport/print",
      component: _69958072,
      name: "previews-id-evaluationReport-print"
    }, {
      path: "/previews/:id?/HODPMDSCalculator/print",
      component: _b7e80ad6,
      name: "previews-id-HODPMDSCalculator-print"
    }, {
      path: "/previews/:id?/HRD_Implementation_Plan/print",
      component: _4245239b,
      name: "previews-id-HRD_Implementation_Plan-print"
    }, {
      path: "/previews/:id?/Individual_Panel_Evaluation_Form/print",
      component: _1457b7e8,
      name: "previews-id-Individual_Panel_Evaluation_Form-print"
    }, {
      path: "/previews/:id?/Job_Description_template/print",
      component: _56edf1fe,
      name: "previews-id-Job_Description_template-print"
    }, {
      path: "/previews/:id?/Job_Description/print",
      component: _c3fdcb78,
      name: "previews-id-Job_Description-print"
    }, {
      path: "/previews/:id?/LeaveRegister/print",
      component: _73cee764,
      name: "previews-id-LeaveRegister-print"
    }, {
      path: "/previews/:id?/letter/print",
      component: _7a2d0c88,
      name: "previews-id-letter-print"
    }, {
      path: "/previews/:id?/memo/print",
      component: _34d440c8,
      name: "previews-id-memo-print"
    }, {
      path: "/previews/:id?/minutes/print",
      component: _177fd2ae,
      name: "previews-id-minutes-print"
    }, {
      path: "/previews/:id?/Monthly_Training_Report_and_Plan/print",
      component: _5cabf8aa,
      name: "previews-id-Monthly_Training_Report_and_Plan-print"
    }, {
      path: "/previews/:id?/operationalPlan/print",
      component: _b9099636,
      name: "previews-id-operationalPlan-print"
    }, {
      path: "/previews/:id?/Panel_Declaration/print",
      component: _70a46f6e,
      name: "previews-id-Panel_Declaration-print"
    }, {
      path: "/previews/:id?/Recruitment_Form_Annexure_A/print",
      component: _11ebc7f8,
      name: "previews-id-Recruitment_Form_Annexure_A-print"
    }, {
      path: "/previews/:id?/Recruitment_Form_Annexure_B1/print",
      component: _747c88f8,
      name: "previews-id-Recruitment_Form_Annexure_B1-print"
    }, {
      path: "/previews/:id?/Reference_Check_Template/print",
      component: _4d510f72,
      name: "previews-id-Reference_Check_Template-print"
    }, {
      path: "/previews/:id?/Score_Sheet_For_Interviews_Level_1_12/print",
      component: _5cbec684,
      name: "previews-id-Score_Sheet_For_Interviews_Level_1_12-print"
    }, {
      path: "/previews/:id?/Score_Sheet_For_Interviews/print",
      component: _0885fed7,
      name: "previews-id-Score_Sheet_For_Interviews-print"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:number?",
      component: _b41da8b8,
      name: "creation-fileplan-subseries-templates-number"
    }, {
      path: "/maintenance/:fileplan?/subseries/files/:ref?",
      component: _784fd710,
      name: "maintenance-fileplan-subseries-files-ref"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/Acceptance_of_An_Offer",
      component: _144e0084,
      name: "creation-fileplan-subseries-templates-ref-Acceptance_of_An_Offer"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/accessControlForm",
      component: _46851e8e,
      name: "creation-fileplan-subseries-templates-ref-accessControlForm"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/acknowledgementOfDebt",
      component: _feb19540,
      name: "creation-fileplan-subseries-templates-ref-acknowledgementOfDebt"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/agenda",
      component: _4e09f8a6,
      name: "creation-fileplan-subseries-templates-ref-agenda"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/AnnualAssessmentHOD",
      component: _13459f50,
      name: "creation-fileplan-subseries-templates-ref-AnnualAssessmentHOD"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/annualDistrictPlanningManagement&Monitoring",
      component: _073da2bd,
      name: "creation-fileplan-subseries-templates-ref-annualDistrictPlanningManagement&Monitoring"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/annualDistrictPlanningManagement&MonitoringTerm2-4",
      component: _7ccd6246,
      name: "creation-fileplan-subseries-templates-ref-annualDistrictPlanningManagement&MonitoringTerm2-4"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/annualPerformancePlan",
      component: _3735e054,
      name: "creation-fileplan-subseries-templates-ref-annualPerformancePlan"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/annualPerformancePlanQuarterlyReport",
      component: _77f7fc6d,
      name: "creation-fileplan-subseries-templates-ref-annualPerformancePlanQuarterlyReport"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/applicationForLeaveOfAbsence",
      component: _1c990582,
      name: "creation-fileplan-subseries-templates-ref-applicationForLeaveOfAbsence"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/AssetDataRecording",
      component: _177e7e5e,
      name: "creation-fileplan-subseries-templates-ref-AssetDataRecording"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/AssetMovement",
      component: _392fea9b,
      name: "creation-fileplan-subseries-templates-ref-AssetMovement"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/AssetRegisterTable3",
      component: _94ea2ed8,
      name: "creation-fileplan-subseries-templates-ref-AssetRegisterTable3"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/AssetsMovement",
      component: _6f26578c,
      name: "creation-fileplan-subseries-templates-ref-AssetsMovement"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/attendance",
      component: _78f9907a,
      name: "creation-fileplan-subseries-templates-ref-attendance"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/AuditReportOnMobileClassrooms",
      component: _d61fc4a8,
      name: "creation-fileplan-subseries-templates-ref-AuditReportOnMobileClassrooms"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/checklist",
      component: _3d91ef3c,
      name: "creation-fileplan-subseries-templates-ref-checklist"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/CheckListForAudit",
      component: _0be6c794,
      name: "creation-fileplan-subseries-templates-ref-CheckListForAudit"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/checklistForSiteVisit",
      component: _4cf8fbbd,
      name: "creation-fileplan-subseries-templates-ref-checklistForSiteVisit"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/circular",
      component: _5c00e3b9,
      name: "creation-fileplan-subseries-templates-ref-circular"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/claimFormFuel",
      component: _0456e99c,
      name: "creation-fileplan-subseries-templates-ref-claimFormFuel"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/clearanceLetter",
      component: _f3529944,
      name: "creation-fileplan-subseries-templates-ref-clearanceLetter"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/collectionOfRedundantOrUnserviceableAssetsByDisposalUnit",
      component: _1e98dae4,
      name: "creation-fileplan-subseries-templates-ref-collectionOfRedundantOrUnserviceableAssetsByDisposalUnit"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/commitmentRegisterForm",
      component: _cd131f54,
      name: "creation-fileplan-subseries-templates-ref-commitmentRegisterForm"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/Consolidated_Evaluation_Sheet",
      component: _37b887fc,
      name: "creation-fileplan-subseries-templates-ref-Consolidated_Evaluation_Sheet"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/DataCollectionTable1",
      component: _5ccccde5,
      name: "creation-fileplan-subseries-templates-ref-DataCollectionTable1"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/DiscussionandMotivationForm",
      component: _505ea7a5,
      name: "creation-fileplan-subseries-templates-ref-DiscussionandMotivationForm"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/disposalRegisterForTheHeadOffice",
      component: _591cce32,
      name: "creation-fileplan-subseries-templates-ref-disposalRegisterForTheHeadOffice"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/employeeSecurityAccessControl",
      component: _79743be7,
      name: "creation-fileplan-subseries-templates-ref-employeeSecurityAccessControl"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/Evaluation_for_Oral_Presentation",
      component: _d49b8fa8,
      name: "creation-fileplan-subseries-templates-ref-Evaluation_for_Oral_Presentation"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/Evaluation_form_for_Technical_Exercise",
      component: _3fd3adfc,
      name: "creation-fileplan-subseries-templates-ref-Evaluation_form_for_Technical_Exercise"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/Evaluationreport",
      component: _49ed386a,
      name: "creation-fileplan-subseries-templates-ref-Evaluationreport"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/evaluationReport_ExamDistributionPoint",
      component: _d82a44d0,
      name: "creation-fileplan-subseries-templates-ref-evaluationReport_ExamDistributionPoint"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/evidenceForminstitutionSupportVisit",
      component: _f6a93b96,
      name: "creation-fileplan-subseries-templates-ref-evidenceForminstitutionSupportVisit"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/governmentVehiclesToBeDisposed",
      component: _758e8535,
      name: "creation-fileplan-subseries-templates-ref-governmentVehiclesToBeDisposed"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/HandingTakingOverCertificate",
      component: _ac40cfb4,
      name: "creation-fileplan-subseries-templates-ref-HandingTakingOverCertificate"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/HandOverCertification",
      component: _5a14d773,
      name: "creation-fileplan-subseries-templates-ref-HandOverCertification"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/HODPMDSCalculator",
      component: _0b6c4772,
      name: "creation-fileplan-subseries-templates-ref-HODPMDSCalculator"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/HRD_Implementation_Plan",
      component: _2a97878d,
      name: "creation-fileplan-subseries-templates-ref-HRD_Implementation_Plan"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/implementationPlanForTheAmended",
      component: _49d224f2,
      name: "creation-fileplan-subseries-templates-ref-implementationPlanForTheAmended"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/Individual_Panel_Evaluation_Form",
      component: _b9addc40,
      name: "creation-fileplan-subseries-templates-ref-Individual_Panel_Evaluation_Form"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/invitationforbids",
      component: _007db93c,
      name: "creation-fileplan-subseries-templates-ref-invitationforbids"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/iternaryForMiddleManagementOfficials",
      component: _84d6be5a,
      name: "creation-fileplan-subseries-templates-ref-iternaryForMiddleManagementOfficials"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/iternaryLogSheetOfOfficialTrips",
      component: _7418843b,
      name: "creation-fileplan-subseries-templates-ref-iternaryLogSheetOfOfficialTrips"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/Job_Description",
      component: _41b31b36,
      name: "creation-fileplan-subseries-templates-ref-Job_Description"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/Job_Description_template",
      component: _0d3b63f9,
      name: "creation-fileplan-subseries-templates-ref-Job_Description_template"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/leave",
      component: _dc24469a,
      name: "creation-fileplan-subseries-templates-ref-leave"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/leave_checklist",
      component: _5bdfc61a,
      name: "creation-fileplan-subseries-templates-ref-leave_checklist"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/LeaveChecklist",
      component: _638c22a9,
      name: "creation-fileplan-subseries-templates-ref-LeaveChecklist"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/LeaveRegister",
      component: _35f3d796,
      name: "creation-fileplan-subseries-templates-ref-LeaveRegister"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/letter",
      component: _098a2840,
      name: "creation-fileplan-subseries-templates-ref-letter"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/memo",
      component: _424c37d8,
      name: "creation-fileplan-subseries-templates-ref-memo"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/memo_cover_transactions_below30000",
      component: _0e8e744e,
      name: "creation-fileplan-subseries-templates-ref-memo_cover_transactions_below30000"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/memoCessionAgreementEndorsement",
      component: _1cfd0d68,
      name: "creation-fileplan-subseries-templates-ref-memoCessionAgreementEndorsement"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/MidYearAssessmentForHOD",
      component: _c2ac1112,
      name: "creation-fileplan-subseries-templates-ref-MidYearAssessmentForHOD"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/minutes",
      component: _673eb49b,
      name: "creation-fileplan-subseries-templates-ref-minutes"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/Monthly_Training_Report_and_Plan",
      component: _607b5da3,
      name: "creation-fileplan-subseries-templates-ref-Monthly_Training_Report_and_Plan"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/noticeoftermination",
      component: _1c4aa09e,
      name: "creation-fileplan-subseries-templates-ref-noticeoftermination"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/oathOfSecrecy",
      component: _5e01878e,
      name: "creation-fileplan-subseries-templates-ref-oathOfSecrecy"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/operationalPlan",
      component: _472d35d7,
      name: "creation-fileplan-subseries-templates-ref-operationalPlan"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/Panel_Declaration",
      component: _1deba9fb,
      name: "creation-fileplan-subseries-templates-ref-Panel_Declaration"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/PerformanceAgreementForHOD",
      component: _bba40870,
      name: "creation-fileplan-subseries-templates-ref-PerformanceAgreementForHOD"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/personelAcessControl",
      component: _9e43c720,
      name: "creation-fileplan-subseries-templates-ref-personelAcessControl"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/quarterlyReportingTemplate",
      component: _3edae82e,
      name: "creation-fileplan-subseries-templates-ref-quarterlyReportingTemplate"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/Recruitment_Form_Annexure_A",
      component: _0ef73d6a,
      name: "creation-fileplan-subseries-templates-ref-Recruitment_Form_Annexure_A"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/Recruitment_Form_Annexure_B1",
      component: _fe459208,
      name: "creation-fileplan-subseries-templates-ref-Recruitment_Form_Annexure_B1"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/Reference_Check_Template",
      component: _1209d53f,
      name: "creation-fileplan-subseries-templates-ref-Reference_Check_Template"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/RemurativeWorkoutSidePublicService",
      component: _12ed6220,
      name: "creation-fileplan-subseries-templates-ref-RemurativeWorkoutSidePublicService"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/RequisitionForm",
      component: _38ad14dc,
      name: "creation-fileplan-subseries-templates-ref-RequisitionForm"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/riskManagementProfile",
      component: _779858d3,
      name: "creation-fileplan-subseries-templates-ref-riskManagementProfile"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/schemeBClaimForm1",
      component: _4ea3e7ea,
      name: "creation-fileplan-subseries-templates-ref-schemeBClaimForm1"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/schemeBClaimForm2",
      component: _38eecaaa,
      name: "creation-fileplan-subseries-templates-ref-schemeBClaimForm2"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/SchoolLevelMonitoringTool",
      component: _b4ea02a8,
      name: "creation-fileplan-subseries-templates-ref-SchoolLevelMonitoringTool"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/SchoolMonitoringTool",
      component: _5709bf0e,
      name: "creation-fileplan-subseries-templates-ref-SchoolMonitoringTool"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/Score_Sheet_For_Interviews",
      component: _95c559e2,
      name: "creation-fileplan-subseries-templates-ref-Score_Sheet_For_Interviews"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/Score_Sheet_For_Interviews_Level_1_12",
      component: _1763f5f0,
      name: "creation-fileplan-subseries-templates-ref-Score_Sheet_For_Interviews_Level_1_12"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/SecurityClearance",
      component: _2df823d8,
      name: "creation-fileplan-subseries-templates-ref-SecurityClearance"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/SecurityClearanceZ204",
      component: _43b4f574,
      name: "creation-fileplan-subseries-templates-ref-SecurityClearanceZ204"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/siteInspection",
      component: _c637fa16,
      name: "creation-fileplan-subseries-templates-ref-siteInspection"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/specification_form",
      component: _285d439a,
      name: "creation-fileplan-subseries-templates-ref-specification_form"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/SSAVettingRequest",
      component: _41fcf78e,
      name: "creation-fileplan-subseries-templates-ref-SSAVettingRequest"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/standardOperatingProceduresApp",
      component: _3aeab892,
      name: "creation-fileplan-subseries-templates-ref-standardOperatingProceduresApp"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/summaryOfKillometersTravelled",
      component: _5effc88f,
      name: "creation-fileplan-subseries-templates-ref-summaryOfKillometersTravelled"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/supplychainmanagement",
      component: _1ca90371,
      name: "creation-fileplan-subseries-templates-ref-supplychainmanagement"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/temporaryIncapacityLeave",
      component: _121ccfa1,
      name: "creation-fileplan-subseries-templates-ref-temporaryIncapacityLeave"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/Term3SchoolRM",
      component: _1ad95932,
      name: "creation-fileplan-subseries-templates-ref-Term3SchoolRM"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/transferOfAssetsBoughtOnBehalfOfSchools",
      component: _cb83b502,
      name: "creation-fileplan-subseries-templates-ref-transferOfAssetsBoughtOnBehalfOfSchools"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/transportClaimForms",
      component: _d7d97950,
      name: "creation-fileplan-subseries-templates-ref-transportClaimForms"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/TransportClaimTemplate",
      component: _2283cda7,
      name: "creation-fileplan-subseries-templates-ref-TransportClaimTemplate"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/treasuryAssetsNewlyBarcordedLog",
      component: _bdc5bed2,
      name: "creation-fileplan-subseries-templates-ref-treasuryAssetsNewlyBarcordedLog"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/treasuryLocationControlSheet",
      component: _24e340d8,
      name: "creation-fileplan-subseries-templates-ref-treasuryLocationControlSheet"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/voucherRequisition",
      component: _311a4ca8,
      name: "creation-fileplan-subseries-templates-ref-voucherRequisition"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/weeklyProgramme",
      component: _18f6b152,
      name: "creation-fileplan-subseries-templates-ref-weeklyProgramme"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/weeklyTravelPlan",
      component: _043256c4,
      name: "creation-fileplan-subseries-templates-ref-weeklyTravelPlan"
    }, {
      path: "/creation/:fileplan?/subseries/templates/:ref?/letter/:docId",
      component: _dc95de14,
      name: "creation-fileplan-subseries-templates-ref-letter-docId"
    }, {
      path: "/creation/:fileplan?/subseries/:id?",
      component: _e43d9168,
      name: "creation-fileplan-subseries-id"
    }, {
      path: "/maintenance/:fileplan?/subseries/:id?",
      component: _0cf0e2c6,
      name: "maintenance-fileplan-subseries-id"
    }, {
      path: "/previews/:id?/Acceptance_of_An_Offer/:location?",
      component: _4bc7a233,
      name: "previews-id-Acceptance_of_An_Offer-location"
    }, {
      path: "/previews/:id?/acknowledgementOfDebt/:location?",
      component: _f66e4ed6,
      name: "previews-id-acknowledgementOfDebt-location"
    }, {
      path: "/previews/:id?/agenda/:location?",
      component: _58753355,
      name: "previews-id-agenda-location"
    }, {
      path: "/previews/:id?/AnnualPerformanceAssessmentsHOD/:location?",
      component: _4fa675ce,
      name: "previews-id-AnnualPerformanceAssessmentsHOD-location"
    }, {
      path: "/previews/:id?/annualPerformancePlan/:location?",
      component: _6eeeefea,
      name: "previews-id-annualPerformancePlan-location"
    }, {
      path: "/previews/:id?/annualPerformancePlanQuarterlyReport/:location?",
      component: _96790248,
      name: "previews-id-annualPerformancePlanQuarterlyReport-location"
    }, {
      path: "/previews/:id?/applicationForLeaveOfAbsence/:location?",
      component: _ca9c1b1e,
      name: "previews-id-applicationForLeaveOfAbsence-location"
    }, {
      path: "/previews/:id?/AssetDataRecording/:location?",
      component: _47b63280,
      name: "previews-id-AssetDataRecording-location"
    }, {
      path: "/previews/:id?/AssetMovement/:loaction?",
      component: _dd8fd1d8,
      name: "previews-id-AssetMovement-loaction"
    }, {
      path: "/previews/:id?/AssetRegisterTable3/:location?",
      component: _7976f289,
      name: "previews-id-AssetRegisterTable3-location"
    }, {
      path: "/previews/:id?/attendance/:location?",
      component: _76671d72,
      name: "previews-id-attendance-location"
    }, {
      path: "/previews/:id?/AuditReportOnMobileClassrooms/:loaction?",
      component: _5e7bd8b6,
      name: "previews-id-AuditReportOnMobileClassrooms-loaction"
    }, {
      path: "/previews/:id?/checklist/:location?",
      component: _550021d2,
      name: "previews-id-checklist-location"
    }, {
      path: "/previews/:id?/checklistForSiteVisit/:location?",
      component: _a833af1c,
      name: "previews-id-checklistForSiteVisit-location"
    }, {
      path: "/previews/:id?/circular/:location?",
      component: _b86094b0,
      name: "previews-id-circular-location"
    }, {
      path: "/previews/:id?/claimFormFuel/:location?",
      component: _0a32cf32,
      name: "previews-id-claimFormFuel-location"
    }, {
      path: "/previews/:id?/clearanceLetter/:location?",
      component: _696a19d3,
      name: "previews-id-clearanceLetter-location"
    }, {
      path: "/previews/:id?/collectionOfRedundantOrUnserviceableAssetsByDisposalUnit/:loaction?",
      component: _653c2d17,
      name: "previews-id-collectionOfRedundantOrUnserviceableAssetsByDisposalUnit-loaction"
    }, {
      path: "/previews/:id?/commitmentRegisterForm/:location?",
      component: _24afd905,
      name: "previews-id-commitmentRegisterForm-location"
    }, {
      path: "/previews/:id?/Consolidated_Evaluation_Sheet/:location?",
      component: _69b6da31,
      name: "previews-id-Consolidated_Evaluation_Sheet-location"
    }, {
      path: "/previews/:id?/DataCollectionTable1/:location?",
      component: _31586358,
      name: "previews-id-DataCollectionTable1-location"
    }, {
      path: "/previews/:id?/DiscussionandMotivationForm/:location?",
      component: _489543cc,
      name: "previews-id-DiscussionandMotivationForm-location"
    }, {
      path: "/previews/:id?/disposalRegisterForTheHeadOffice/:location?",
      component: _8dc176be,
      name: "previews-id-disposalRegisterForTheHeadOffice-location"
    }, {
      path: "/previews/:id?/employeeSecurityAccessControl/:location?",
      component: _3d50a09c,
      name: "previews-id-employeeSecurityAccessControl-location"
    }, {
      path: "/previews/:id?/Evaluation_for_Oral_Presentation/:location?",
      component: _789b219b,
      name: "previews-id-Evaluation_for_Oral_Presentation-location"
    }, {
      path: "/previews/:id?/Evaluation_form_for_Technical_Exercise/:location?",
      component: _1690e1b1,
      name: "previews-id-Evaluation_form_for_Technical_Exercise-location"
    }, {
      path: "/previews/:id?/evaluationReport/:location?",
      component: _4f9874d9,
      name: "previews-id-evaluationReport-location"
    }, {
      path: "/previews/:id?/evidenceForminstitutionSupportVisit/:location?",
      component: _ccf024ac,
      name: "previews-id-evidenceForminstitutionSupportVisit-location"
    }, {
      path: "/previews/:id?/governmentVehiclesToBeDisposed/:location?",
      component: _1090a964,
      name: "previews-id-governmentVehiclesToBeDisposed-location"
    }, {
      path: "/previews/:id?/HandingTakingOverCertificate/:location?",
      component: _27669315,
      name: "previews-id-HandingTakingOverCertificate-location"
    }, {
      path: "/previews/:id?/HandOverCertification/:location?",
      component: _68bd8db0,
      name: "previews-id-HandOverCertification-location"
    }, {
      path: "/previews/:id?/HODPMDSCalculator/:location?",
      component: _182f257c,
      name: "previews-id-HODPMDSCalculator-location"
    }, {
      path: "/previews/:id?/HRD_Implementation_Plan/:location?",
      component: _34005b82,
      name: "previews-id-HRD_Implementation_Plan-location"
    }, {
      path: "/previews/:id?/Individual_Panel_Evaluation_Form/:location?",
      component: _5233fd62,
      name: "previews-id-Individual_Panel_Evaluation_Form-location"
    }, {
      path: "/previews/:id?/iternaryForMiddleManagementOfficials/:location?",
      component: _4de8ff7c,
      name: "previews-id-iternaryForMiddleManagementOfficials-location"
    }, {
      path: "/previews/:id?/iternaryLogSheetOfOfficialTrips/:location?",
      component: _b3d923a0,
      name: "previews-id-iternaryLogSheetOfOfficialTrips-location"
    }, {
      path: "/previews/:id?/Job_Description_template/:location?",
      component: _71381be8,
      name: "previews-id-Job_Description_template-location"
    }, {
      path: "/previews/:id?/Job_Description/:location?",
      component: _63c254aa,
      name: "previews-id-Job_Description-location"
    }, {
      path: "/previews/:id?/LeaveRegister/:location?",
      component: _400112cb,
      name: "previews-id-LeaveRegister-location"
    }, {
      path: "/previews/:id?/letter/:location?",
      component: _1a7ff422,
      name: "previews-id-letter-location"
    }, {
      path: "/previews/:id?/memo/:location?",
      component: _08a12f03,
      name: "previews-id-memo-location"
    }, {
      path: "/previews/:id?/MidYearAssessmentForHOD/:location?",
      component: _7824c66c,
      name: "previews-id-MidYearAssessmentForHOD-location"
    }, {
      path: "/previews/:id?/minutes/:location?",
      component: _8be1d0e0,
      name: "previews-id-minutes-location"
    }, {
      path: "/previews/:id?/Monthly_Training_Report_and_Plan/:location?",
      component: _725298dc,
      name: "previews-id-Monthly_Training_Report_and_Plan-location"
    }, {
      path: "/previews/:id?/oathOfSecrecy/:location?",
      component: _30992424,
      name: "previews-id-oathOfSecrecy-location"
    }, {
      path: "/previews/:id?/operationalPlan/:location?",
      component: _044e9068,
      name: "previews-id-operationalPlan-location"
    }, {
      path: "/previews/:id?/Panel_Declaration/:location?",
      component: _53ea0da0,
      name: "previews-id-Panel_Declaration-location"
    }, {
      path: "/previews/:id?/PerformanceAgreementForHOD/:location?",
      component: _1a54dcf7,
      name: "previews-id-PerformanceAgreementForHOD-location"
    }, {
      path: "/previews/:id?/personelAccessControl/:location?",
      component: _0942c52e,
      name: "previews-id-personelAccessControl-location"
    }, {
      path: "/previews/:id?/quarterlyReportingTemplate/:location?",
      component: _75c27498,
      name: "previews-id-quarterlyReportingTemplate-location"
    }, {
      path: "/previews/:id?/Recruitment_Form_Annexure_A/:location?",
      component: _6658ed42,
      name: "previews-id-Recruitment_Form_Annexure_A-location"
    }, {
      path: "/previews/:id?/Recruitment_Form_Annexure_B1/:location?",
      component: _13a6522a,
      name: "previews-id-Recruitment_Form_Annexure_B1-location"
    }, {
      path: "/previews/:id?/Reference_Check_Template/:location?",
      component: _c97f0ba4,
      name: "previews-id-Reference_Check_Template-location"
    }, {
      path: "/previews/:id?/riskManagementProfile/:location?",
      component: _e275eaf0,
      name: "previews-id-riskManagementProfile-location"
    }, {
      path: "/previews/:id?/schemeBClaimForm1/:location?",
      component: _5384a79f,
      name: "previews-id-schemeBClaimForm1-location"
    }, {
      path: "/previews/:id?/schemeBClaimForm2/:location?",
      component: _a53fdc40,
      name: "previews-id-schemeBClaimForm2-location"
    }, {
      path: "/previews/:id?/Score_Sheet_For_Interviews_Level_1_12/:location?",
      component: _48e48b25,
      name: "previews-id-Score_Sheet_For_Interviews_Level_1_12-location"
    }, {
      path: "/previews/:id?/Score_Sheet_For_Interviews/:location?",
      component: _28ad8e84,
      name: "previews-id-Score_Sheet_For_Interviews-location"
    }, {
      path: "/previews/:id?/SecurityClearance/:location?",
      component: _954586e6,
      name: "previews-id-SecurityClearance-location"
    }, {
      path: "/previews/:id?/SecurityClearanceZ204/:location?",
      component: _e7df22ae,
      name: "previews-id-SecurityClearanceZ204-location"
    }, {
      path: "/previews/:id?/siteInspection/:location?",
      component: _3fb47db8,
      name: "previews-id-siteInspection-location"
    }, {
      path: "/previews/:id?/specification_form/:location?",
      component: _40d228c9,
      name: "previews-id-specification_form-location"
    }, {
      path: "/previews/:id?/SSAVettingRequest/:location?",
      component: _080d846e,
      name: "previews-id-SSAVettingRequest-location"
    }, {
      path: "/previews/:id?/standardOperatingProceduresApp/:location?",
      component: _4d75b6e6,
      name: "previews-id-standardOperatingProceduresApp-location"
    }, {
      path: "/previews/:id?/summaryOfKillometersTravelled/:location?",
      component: _23759944,
      name: "previews-id-summaryOfKillometersTravelled-location"
    }, {
      path: "/previews/:id?/temporaryIncapacityLeave/:location?",
      component: _0aab7390,
      name: "previews-id-temporaryIncapacityLeave-location"
    }, {
      path: "/previews/:id?/transferOfAssetsBoughtOnBehalfOfSchools/:location?",
      component: _36adea74,
      name: "previews-id-transferOfAssetsBoughtOnBehalfOfSchools-location"
    }, {
      path: "/previews/:id?/transportClaimForms/:location?",
      component: _59e76966,
      name: "previews-id-transportClaimForms-location"
    }, {
      path: "/previews/:id?/TransportClaimTemplate/:location?",
      component: _fb87b454,
      name: "previews-id-TransportClaimTemplate-location"
    }, {
      path: "/previews/:id?/treasuryAssetsNewlyBarcordedLog/:location?",
      component: _4c7a7c8c,
      name: "previews-id-treasuryAssetsNewlyBarcordedLog-location"
    }, {
      path: "/previews/:id?/treasuryLocationControlSheet/:location?",
      component: _433018fa,
      name: "previews-id-treasuryLocationControlSheet-location"
    }, {
      path: "/previews/:id?/weeklyProgramme/:location?",
      component: _33c92d68,
      name: "previews-id-weeklyProgramme-location"
    }, {
      path: "/previews/:id?/weeklyTravelPlan/:location?",
      component: _5233a1e6,
      name: "previews-id-weeklyTravelPlan-location"
    }, {
      path: "/usage/:fileplan?/:id",
      component: _47b7b1ef,
      name: "usage-fileplan-id"
    }, {
      path: "/",
      component: _db464686,
      name: "index"
    }],

    fallback: false
  })
}
