<template>
  <v-container grid-list-md>

    <v-layout row wrap justify-space-between>

      <v-flex mb-5>
        <v-layout>
          <Toolbar :data="doc" />
        </v-layout>
      </v-flex>

    <v-flex mb-5>
        
      </v-flex>

      <v-flex xs2></v-flex>
      <v-flex></v-flex>

    <v-flex xs9>
      <v-layout column wrap justify-space-between>

        <v-flex xs12>

          <p align="center">
            <strong>
              RFQ EVALUATION REPORT FOR QUOTATIONS ABOVE <u>R30, 000.00</u> PER CASE
            </strong>
          </p>
          <p>
            <strong></strong>
          </p>
          <v-layout wrap>
          <v-flex xs6>
            <v-text-field v-model="doc.ref" label="Our ref"></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field v-model="doc.body.rfq" label="Enquiries :"></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field v-model="doc.body.tel" label="Telephone : "></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-menu v-model="menu1a" :close-on-content-click="false" :nudge-right="40"
                      transition="scale-transition" offset-y min-width="290px">
                      <template v-slot:activator="{ on }">
                        <v-text-field v-model="doc.body.date" label="Date " readonly v-on="on">
                        </v-text-field>
                      </template>
                      <v-date-picker v-model="doc.body.date" @input="menu1b = false"></v-date-picker>
                    </v-menu>
          </v-flex>
          </v-layout>
          <v-layout wrap>
            <v-flex xs6>
            <v-text-field v-model="doc.body.consideration" label="CONSIDERATION OF QUOTATIONS FOR RFQ: LDE/Q"></v-text-field>
          </v-flex>
          </v-layout>

          <v-layout wrap>
             DESCRIPTION OF SERVICE :
            <v-flex xs12>
            <v-text-field v-model="doc.body.description" ></v-text-field>
          </v-flex>
          </v-layout>
         
         
          <p>
            <strong>1. </strong>
            <strong>PURPOSE</strong>
          </p>
          <p>
            The Adjudication Committee/Accounting Officer is requested to consider the
            recommendation of the Bid Evaluation Committee for Quotations and finalise
            the adjudication and award accordingly.
          </p>
          <p>
            <strong>2. </strong>
            <strong>BACKGROUND</strong>
          </p>
          <p>
            <strong></strong>
          </p>
          <p>
            RFQ were issued to the selected suppliers as per Annexure “A” and
            quotations were received as per Annexure “B”. <strong></strong>
          </p>
          <p>
            <strong>3. </strong>
            <strong>SCOPE OF SERVICES</strong>
          </p>
          <p>
            <strong></strong>
          </p>
          
          <v-layout wrap>
             The appointed supplier will render the following services:-
            <v-flex xs12>
            <v-text-field v-model="doc.body.ref" ></v-text-field>
          </v-flex>
          </v-layout>
          <p>
            1.
          </p>
          <p>
            <strong>4. </strong>
            <strong>Evaluation Outcomes</strong>
          </p>
          <p>
            <strong></strong>
          </p>
          <p>
            4.1 The Evaluation Process entailed the following two phases: <strong></strong>
          </p>
          <p>
            (a) Administrative Compliance<strong></strong>
          </p>
          <p>
            (b) Price and BBBEE<strong></strong>
          </p>
          <p>
            4.2. The following are outcomes of the evaluation process:-
          </p>
          <p>
            4.2.1. Evaluation on Administrative Compliance<strong></strong>
          </p>
          <p>
            (a) The following Quotations were disqualified on administrative
            compliance: -<strong></strong>
          </p>

        </v-flex>

      </v-layout>

      <v-layout column Justify-space-between>

        <v-flex xs12>

          <table border="1" cellspacing="0" cellpadding="0" width="0">
            <tbody>
              <tr>
                <td valign="top">
                  <p>
                    FOLIO
                  </p>
                </td>
                <td valign="top">
                  <p>
                    NAME OF THE COMPANY
                  </p>
                </td>
                <td valign="top">
                  <p>
                    TOTAL BID PRICE
                  </p>
                </td>
               
                <td valign="top">
                  <p>
                    REASON
                  </p>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <v-text-field v-model="doc.body.disqualifiedQoutes[0].folio" single-line solo flat placeholder="FOLIO"></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.disqualifiedQoutes[0].companyName" single-line solo flat placeholder="NAME OF THE COMPANY"></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.disqualifiedQoutes[0].bidPrice" single-line solo flat placeholder="TOTAL BID PRICE "></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.disqualifiedQoutes[0].reason" single-line solo flat placeholder="REASON"></v-text-field>
                </td>
              </tr>

              <tr>
                <td valign="top">
                  <v-text-field v-model="doc.body.disqualifiedQoutes[1].folio" single-line solo flat placeholder="FOLIO"></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.disqualifiedQoutes[1].companyName" single-line solo flat placeholder="NAME OF THE COMPANY"></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.disqualifiedQoutes[1].bidPrice" single-line solo flat placeholder="TOTAL BID PRICE "></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.disqualifiedQoutes[1].reason" single-line solo flat placeholder="REASON"></v-text-field>
                </td>
              </tr>

              <tr>
                <td valign="top">
                  <v-text-field v-model="doc.body.disqualifiedQoutes[2].folio" single-line solo flat placeholder="FOLIO"></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.disqualifiedQoutes[2].companyName" single-line solo flat placeholder="NAME OF THE COMPANY"></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.disqualifiedQoutes[2].bidPrice" single-line solo flat placeholder="TOTAL BID PRICE "></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.disqualifiedQoutes[2].reason" single-line solo flat placeholder="REASON"></v-text-field>
                </td>
              </tr>

              <tr>
                <td valign="top">
                  <v-text-field v-model="doc.body.disqualifiedQoutes[3].folio" single-line solo flat placeholder="FOLIO"></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.disqualifiedQoutes[3].companyName" single-line solo flat placeholder="NAME OF THE COMPANY"></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.disqualifiedQoutes[3].bidPrice" single-line solo flat placeholder="TOTAL BID PRICE "></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.disqualifiedQoutes[3].reason" single-line solo flat placeholder="REASON"></v-text-field>
                </td>
              </tr>

              <tr>
                <td valign="top">
                  <v-text-field v-model="doc.body.disqualifiedQoutes[4].folio" single-line solo flat placeholder="FOLIO"></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.disqualifiedQoutes[4].companyName" single-line solo flat placeholder="NAME OF THE COMPANY"></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.disqualifiedQoutes[4].bidPrice" single-line solo flat placeholder="TOTAL BID PRICE "></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.disqualifiedQoutes[4].reason" single-line solo flat placeholder="REASON"></v-text-field>
                </td>
              </tr>
              
            </tbody>
          </table>
          <br>

          <p>
            (b) The following bidders qualified for the next evaluation phase
          </p>
          <table border="1" cellspacing="0" cellpadding="0" width="0">
            <tbody>
              <tr>
                <td valign="top">
                  <p>
                    FOLIO
                  </p>
                </td>
                <td valign="top">
                  <p>
                    NAME OF THE COMPANY
                  </p>
                </td>
                <td valign="top">
                  <p>
                    TOTAL BID PRICE
                  </p>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <v-text-field v-model="doc.body.qualifiedQoutes[0].folio" single-line solo flat placeholder="FOLIO"></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.qualifiedQoutes[0].companyName" single-line solo flat placeholder="NAME OF THE COMPANY"></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.qualifiedQoutes[0].bidPrice" single-line solo flat placeholder="TOTAL BID PRICE "></v-text-field>
                </td>
              </tr>

              <tr>
                <td valign="top">
                  <v-text-field v-model="doc.body.qualifiedQoutes[1].folio" single-line solo flat placeholder="FOLIO"></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.qualifiedQoutes[1].companyName" single-line solo flat placeholder="NAME OF THE COMPANY"></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.qualifiedQoutes[1].bidPrice" single-line solo flat placeholder="TOTAL BID PRICE "></v-text-field>
                </td>
              </tr>

              <tr>
                <td valign="top">
                  <v-text-field v-model="doc.body.qualifiedQoutes[2].folio" single-line solo flat placeholder="FOLIO"></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.qualifiedQoutes[2].companyName" single-line solo flat placeholder="NAME OF THE COMPANY"></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.qualifiedQoutes[2].bidPrice" single-line solo flat placeholder="TOTAL BID PRICE "></v-text-field>
                </td>
              </tr>

              <tr>
                <td valign="top">
                  <v-text-field v-model="doc.body.qualifiedQoutes[3].folio" single-line solo flat placeholder="FOLIO"></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.qualifiedQoutes[3].companyName" single-line solo flat placeholder="NAME OF THE COMPANY"></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.qualifiedQoutes[3].bidPrice" single-line solo flat placeholder="TOTAL BID PRICE "></v-text-field>
                </td>
              </tr>

              <tr>
                <td valign="top">
                  <v-text-field v-model="doc.body.qualifiedQoutes[4].folio" single-line solo flat placeholder="FOLIO"></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.qualifiedQoutes[4].companyName" single-line solo flat placeholder="NAME OF THE COMPANY"></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.qualifiedQoutes[4].bidPrice" single-line solo flat placeholder="TOTAL BID PRICE "></v-text-field>
                </td>
              </tr>
              
            </tbody>
          </table>
          <br>
          <p>
            <strong>4.2.1. Evaluation on Price and BBBEE </strong>
          </p>
          <table border="1" cellspacing="0" cellpadding="0" align="left" width="0">
            <tbody>
              <tr>
                <td valign="top">
                  <p>
                    FOLIO
                  </p>
                </td>
                <td valign="top">
                  <p>
                    NAME OF THE COMPANY
                  </p>
                </td>
                <td valign="top">
                  <p>
                    TOTAL BID AMOUNT
                  </p>
                </td>
                <td valign="top">
                  <p>
                    LOWEST ACCEPTABLE AMOUNT
                  </p>
                </td>
                <td valign="top">
                  <p>
                    PRICE POINTS
                  </p>
                </td>
                <td valign="top">
                  <p>
                    BBBEE LEVEL
                  </p>
                </td>
                <td valign="top">
                  <p>
                    BBBEE POINTS
                  </p>
                </td>
                <td valign="top">
                  <p>
                    TOTAL POINTS SCORED
                  </p>
                </td>
              </tr>

              <tr>
                <td valign="top">
                  <v-text-field v-model="doc.body.evaluationOnPrice.folio" single-line solo flat placeholder=""></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.evaluationOnPrice.companyName" single-line solo flat placeholder=""></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.evaluationOnPrice.bidPrice" single-line solo flat placeholder=""></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.evaluationOnPrice.lowestAcceptableAmount" single-line solo flat placeholder=""></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.evaluationOnPrice.pricePoints" single-line solo flat placeholder=""></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.evaluationOnPrice.bbbeeLevel" single-line solo flat placeholder=""></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.evaluationOnPrice.bbbeePoints" single-line solo flat placeholder=""></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.evaluationOnPrice.totalPointsScored" single-line solo flat placeholder=""></v-text-field>
                </td>
              </tr>
            </tbody>
          </table>
          <br>
          <br>
          <br>
          <strong>5. RECOMMENDED BIDDER</strong>
          <p>
            The following bidder scored the highest points and is recommended as
            follows:-
          </p>
          <table border="1" cellspacing="0" cellpadding="0" width="0">
            <tbody>
              <tr>
                <td>
                  <p align="center">
                    <strong>NAME OF THE COMPANY</strong>
                  </p>
                </td>
                <td>
                  <p align="center">
                    <strong>Bid Price VAT incl. </strong>
                    <strong></strong>
                  </p>
                </td>
                <td nowrap="">
                  <p align="center">
                    <strong>Price Score </strong>
                  </p>
                </td>
                <td nowrap="">
                  <p align="center">
                    <strong>BBBEE </strong>
                    <strong> Score</strong>
                  </p>
                </td>
                <td nowrap="">
                  <p align="center">
                    <strong>Total Consolidated Scores</strong>
                    <strong></strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <v-text-field v-model="doc.body.recommendedBidder.companyName" single-line solo flat placeholder=""></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.recommendedBidder.bidPrice" single-line solo flat placeholder=""></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.recommendedBidder.priceScore" single-line solo flat placeholder=""></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.recommendedBidder.bbbeeScore" single-line solo flat placeholder=""></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.recommendedBidder.totalConsolidatedScores" single-line solo flat placeholder=""></v-text-field>
                </td>
                
              </tr>
            </tbody>
          </table>
          <br>
          <p>
            <strong>6</strong>
            <strong>
              VERIFICATION ON CENTRALISED SUPPLIER DATABASE (SEE ANNEXURE “C”)
            </strong>
          </p>
          <table border="1" cellspacing="0" cellpadding="0" width="0">

            <tbody>
              <tr>
                <td valign="top">
                  <p align="center">
                    <strong>FOLIO</strong>
                  </p>
                </td>
                <td nowrap="">
                  <p>
                    <strong>NAME OF BIDDERS</strong>
                    <strong></strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Date of the CSD Report</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <v-text-field v-model="doc.body.verificationOnCentralisedSupplierDatabase.folio" 
                  single-line solo flat placeholder=""></v-text-field>
                </td>
                <td nowrap="" valign="top">
                  <v-text-field v-model="doc.body.verificationOnCentralisedSupplierDatabase.name" 
                  single-line solo flat placeholder=""></v-text-field>
                </td>
                <td>
                  <v-menu v-model="menu2a" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="doc.body.verificationOnCentralisedSupplierDatabase.date" label="Date" readonly v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="doc.body.verificationOnCentralisedSupplierDatabase.date" @input="menu2b = false"></v-date-picker>
                </v-menu>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong></strong>
          </p>
          <p>
            <strong>7 </strong>
            <strong>BUDGET ANALYSIS</strong>
          </p>

          <table border="1" cellspacing="0" cellpadding="0" width="0">
            <tbody>
              <tr>
                <td valign="top">
                  <p>
                    <strong>Budget </strong>
                  </p>
                </td>
                <td valign="top">
                  <p>
                    <strong>Awarded amount</strong>
                  </p>
                </td>
                <td valign="top">
                  <p>
                    <strong>Variance </strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <v-text-field v-model="doc.body.budgetAnalysis.budget" 
                  single-line solo flat placeholder=""></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.budgetAnalysis.awardedAmount" 
                  single-line solo flat placeholder=""></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.budgetAnalysis.variance" 
                  single-line solo flat placeholder=""></v-text-field>
                </td>
              </tr>
            </tbody>
          </table>
          <br>
          <p>
            <strong>8 </strong>
            <strong>RECOMMENDATION </strong>
          </p>

          <p>
            It is recommended that the offer by the following bidder be accepted:-
          </p>
          <table border="1" cellspacing="0" cellpadding="0" width="0">

            <tbody>
              <tr>
                <td>
                  <p align="center">
                    <strong>NAME OF THE COMPANY</strong>
                  </p>
                </td>
                <td>
                  <p align="center">
                    <strong>Bid Price VAT incl. </strong>
                    <strong></strong>
                  </p>
                </td>
                <td>
                  <p align="center">
                    <strong>Total Points</strong>
                    <strong></strong>
                  </p>
                </td>
                <td>
                  <p align="center">
                    <strong>BBBEE </strong>
                    <strong> Score</strong>
                  </p>
                </td>
                <td>
                  <p align="center">
                    <strong>Reason </strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <v-text-field v-model="doc.body.recommendation.companyName" 
                  single-line solo flat placeholder=""></v-text-field>
                </td>
                <td valign="top">
                  <v-text-field v-model="doc.body.recommendation.bidPrice" 
                  single-line solo flat placeholder=""></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="doc.body.recommendation.totalPoint" 
                  single-line solo flat placeholder=""></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="doc.body.recommendation.bbbeePoints" 
                  single-line solo flat placeholder=""></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="doc.body.recommendation.reason" 
                  single-line solo flat placeholder=""></v-text-field>
                </td>
              </tr>
            </tbody>
          </table>
          <v-layout wrap>
            <v-flex xs6><u><strong>BEC SIGNATURES</strong> </u></v-flex>
            <v-flex xs6>
              <v-menu v-model="menu3a" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="doc.body.date3" label="Date" readonly v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="doc.body.date3" @input="menu3b = false"></v-date-picker>
                </v-menu>
            </v-flex>
          </v-layout>
          <v-layout wrap>
            <v-flex xs12>
              <SelectUsers v-on:getUsers="setSigners($event)" label="CHAIRPERSON (1): " />
            </v-flex>
            <v-flex xs12>
              <SelectUsers v-on:getUsers="setSigners($event)" label="DEPUTY CHAIRPERSON (1): " />
            </v-flex>
            <v-flex xs12>
              <SelectUsers v-on:getUsers="setSigners($event)" multiple label="MEMBERS (3): " />
            </v-flex>

            <v-flex xs12>
              <SelectUsers v-on:getUsers="setSigners($event)" multiple label="SECRETARIAT (2): " />
            </v-flex>
          </v-layout>

          <p>

            <strong>
              9 ADJUDICATION AND AWARD BY THE BID ADJUDICATION COMMITTEE (ECONOMIZING
              COMMITTEE)
            </strong>
          </p>

          <p>
            A quotation by following supplier is hereby:-
          </p>

          <table border="1" cellspacing="0" cellpadding="0" width="0">
            <tbody>
              <tr>
                <td valign="top">
                  <strong>{{ doc.body.qoutStatus }}</strong> <br>
                    <v-btn color="primary" small dark @click="updateStatus('Approved')">Approved</v-btn><br>
                    <v-btn color="warning" small dark @click="updateStatus('Not Approved')">Not Approved</v-btn>
                </td>
                
                <td valign="top">
                  <v-btn color="success" small dark @click="updateStatus('Varied')">Varied</v-btn><br>
                </td>
              </tr>
            </tbody>
          </table>
          <br>
          <table border="1" cellspacing="0" cellpadding="0" width="0">

            <tbody>
              <tr>
                <td nowrap="">
                  <p align="center">
                    <strong>NAME OF THE COMPANY</strong>
                  </p>
                </td>
                <td nowrap="">
                  <p align="center">
                    <strong>Bid Price VAT incl. </strong>
                    <strong></strong>
                  </p>
                </td>
                <td nowrap="">
                  <p align="center">
                    <strong>Total Points</strong>
                    <strong></strong>
                  </p>
                </td>
                <td nowrap="">
                  <p align="center">
                    <strong>BBBEE </strong>
                    <strong> Score</strong>
                  </p>
                </td>
                <td nowrap="">
                  <p align="center">
                    <strong>Reason </strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td nowrap="" valign="top">
                  <v-text-field v-model="doc.body.approvedQoute.companyName" 
                  single-line solo flat placeholder=""></v-text-field>
                </td>
                <td valign="top">
                 <v-text-field v-model="doc.body.approvedQoute.bidPrice" 
                  single-line solo flat placeholder=""></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="doc.body.approvedQoute.totalPoints" 
                  single-line solo flat placeholder=""></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="doc.body.approvedQoute.score" 
                  single-line solo flat placeholder=""></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="doc.body.approvedQoute.reason" 
                  single-line solo flat placeholder=""></v-text-field>
                </td>
              </tr>
              <tr>

                <td nowrap="" colspan="5" valign="top">
                  COMMENTS IF DISAPPROVED /VARIED 
                  <v-text-field v-model="doc.body.approvedQoute.comment" 
                  single-line solo flat placeholder=""></v-text-field>
                </td>
              </tr>
              
            </tbody>
          </table>
         
          
        </v-flex>
      </v-layout>
    </v-flex>

    </v-layout>
  </v-container>

</template>
<script>
import Vue from "vue";
import Toolbar from "~/components/PreviewToolbar";
import SelectUsers from "~/components/SelectUsers";
import VueSignaturePad from "vue-signature-pad";
import Editor from "@tinymce/tinymce-vue";
import store from "~/store/store";
Vue.use(Editor);

Vue.use(VueSignaturePad);
export default {
  components: {
    editor: Editor,
    Toolbar,
    SelectUsers
  },
  data() {
    return {
      menu1a: false,
      menu1b: false,
      menu2a: false,
      menu2b: false,
      menu3a: false,
      menu3b: false,
      
      user: {},
      users: [],
      loading: false,
      response: {},
      signatories: [],
      signature: "",
      ref: "",
      textInput: "",
      actions: [
        { text: "For Approval", value: "approve" },
        { text: "For Reccomendation", value: "reccomend" },
        { text: "For Input", value: "input" },
        { text: "For Attention", value: "attention" }
      ],
      min_height: 320
    };
  },
  computed: {
    doc() {
      return store.state.doc;
    },
    time() {
      return Date.now();
    },
    setAction(action) {
      return doc.action == action;
    }
  },
  methods: {
    // sign
    clear() {
      this.$refs.signaturePad.clearSignature();
      let pos = this.doc.body.signatures.map(function(e) { return e.EmailAdress; }).indexOf(store.state.user.EmailAdress);    
      let user = this.doc.body.signatures[pos]
      user.signature = "";
      console.log(user);
    },
    onEnd() {
      console.log(this.doc.body.signatures)
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      let pos = this.doc.body.signatures.map(function(e) { return e.EmailAdress; }).indexOf(store.state.user.EmailAdress);    
      let user = this.doc.body.signatures[pos]
      user.signature = data;
      user.signatureDate = Date.now();
      console.log(user);
      console.log("=== End ===");
    }
  },
  async created() {
    console.log(this.ref, this.$route.params.id);
    
    await store.dispatch("getDocById", this.$route.params.id);
    console.log(store.state.doc);
  }
};
</script>

<style>
.side-toolbar {
  position: fixed;
  max-width: 180px;
}
.signature-pad {
  max-width: 480px;
  background-color: #fff;
  border: 1px dotted black;
}
</style>
