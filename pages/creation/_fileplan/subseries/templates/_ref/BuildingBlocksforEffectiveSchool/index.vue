<template>
  <v-container grid-list-md>
    <v-layout row wrap justify-space-between>
      <v-flex xs3>
        <v-layout>
          <Toolbar :data="doc" />
        </v-layout>
      </v-flex>

      <!-- <v-flex xs2></v-flex>
      <v-flex></v-flex>-->
      <v-flex xs9>
        <!-- <v-flex justify-end>
                  <hr style="color:grey" />
        </v-flex>-->
        <v-layout wrap>
          <v-flex xs12>
            <v-card>
              <br />
              


              <!--
              +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
              ++  DISTRICT PLANNING, MANAGEMENT AND MONITORING TOOL TO BE FILLED IN BY MANAGERS      ++
              ++  RESPONSIBLE FOR DISTRICT OPERATIONS FOR TERMS 2-4                                  ++ 
              ++                                                                                     ++
              +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
              -->



 <br />
             
             
               
              

              

              <v-card-text class="pt-0 mt-0">

                 <v-flex xs12>
                <h3
                  class="text-xs-left">
                Form 1: Building Blocks for Effective School Management
                </h3>
               
              </v-flex>
              <br />


                <v-flex xs12>
            

            <v-layout wrap>
              <v-flex xs6>
                <v-text-field v-model="doc.nameOfSchool" label="Name of School:"></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-text-field v-model="doc.body.emis" label="EMIS:"></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-text-field v-model="doc.body.district" label="District:"></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-text-field v-model="doc.body.province" label="Province:"></v-text-field>
              </v-flex>
            </v-layout>

            

              <br/>
       <i>This form should be administered by each province to collect information on the 
       availability and implementation of basic management documents in all schools. 
       Principals and Circuit Managers/District Officials should consider the criteria 
       below and reflect with an X according to <strong>planning, registers and governance documents</strong></i>
        <br/>
          </v-flex>

       
                

               
                <!-- 
              ================================================================
              F. DISTRICT ROLES
              ================================================================
              -->

                 <v-layout xs12 wrap border>
                  <v-flex>
                
               
               

                
                <v-data-table
                      :headers="headers40"
                      :items="doc.body.phase48"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>

                    <template v-slot:items="props" v-slot:no-data>
                      
                        
                        <td >
                           <v-layout wrap>
                             <v-flex xs2>
                          {{props.index + 1}}.
                          </v-flex>
                          <v-flex xs10>
                          {{props.item.planning}}
                          </v-flex>
                          </v-layout>
                          </td>
                      
                     
                     <td class="px-0 py-0">

                       <div v-if="props.index == 0">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              <v-text-field
                                v-model="props.item.zero"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="yellow-bg">
                              <v-text-field
                                v-model="props.item.one"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.two"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.three"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.four"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>


                        <div v-if="props.index == 1">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase1"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              <v-text-field
                                v-model="props.item.zero"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="yellow-bg">
                              <v-text-field
                                v-model="props.item.one"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.two"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.three"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.four"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>


                        <div v-if="props.index == 2">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase2"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              <v-text-field
                                v-model="props.item.zero"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="yellow-bg">
                              <v-text-field
                                v-model="props.item.one"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.two"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.three"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.four"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                         <div v-if="props.index == 3">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase3"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              <v-text-field
                                v-model="props.item.zero"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="yellow-bg">
                              <v-text-field
                                v-model="props.item.one"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.two"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.three"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.four"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                        <div v-if="props.index == 4">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase4"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              <v-text-field
                                v-model="props.item.zero"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="yellow-bg">
                              <v-text-field
                                v-model="props.item.one"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.two"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.three"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.four"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                        <div v-if="props.index == 5">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase5"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              <v-text-field
                                v-model="props.item.zero"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="yellow-bg">
                              <v-text-field
                                v-model="props.item.one"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.two"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.three"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.four"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                        <div v-if="props.index == 6">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase6"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              <v-text-field
                                v-model="props.item.zero"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="yellow-bg">
                              <v-text-field
                                v-model="props.item.one"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.two"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.three"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.four"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                        <div v-if="props.index == 7">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase7"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              <v-text-field
                                v-model="props.item.zero"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="yellow-bg">
                              <v-text-field
                                v-model="props.item.one"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.two"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.three"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.four"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                        <div v-if="props.index == 8">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase8"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              <v-text-field
                                v-model="props.item.zero"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="yellow-bg">
                              <v-text-field
                                v-model="props.item.one"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.two"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.three"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.four"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                        <div v-if="props.index == 9">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase9"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              <v-text-field
                                v-model="props.item.zero"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="yellow-bg">
                              <v-text-field
                                v-model="props.item.one"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.two"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.three"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.four"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                        <div v-if="props.index == 10">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase10"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              <v-text-field
                                v-model="props.item.zero"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="yellow-bg">
                              <v-text-field
                                v-model="props.item.one"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.two"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.three"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.four"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                        <div v-if="props.index == 11">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase11"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              <v-text-field
                                v-model="props.item.zero"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="yellow-bg">
                              <v-text-field
                                v-model="props.item.one"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.two"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.three"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.four"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                        <div v-if="props.index == 12">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase12"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              <v-text-field
                                v-model="props.item.zero"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="yellow-bg">
                              <v-text-field
                                v-model="props.item.one"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.two"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.three"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.four"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                        <div v-if="props.index == 13">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase13"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              <v-text-field
                                v-model="props.item.zero"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="yellow-bg">
                              <v-text-field
                                v-model="props.item.one"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.two"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.three"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.four"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                        <div v-if="props.index == 14">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase14"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              <v-text-field
                                v-model="props.item.zero"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="yellow-bg">
                              <v-text-field
                                v-model="props.item.one"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.two"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.three"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.four"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                        <div v-if="props.index == 15">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase15"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              <v-text-field
                                v-model="props.item.zero"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="yellow-bg">
                              <v-text-field
                                v-model="props.item.one"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.two"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.three"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.four"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                         
                              
                      </td>

                      <td>
                         <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 

                      </td>

                      <td class="px-0 py-0">

                       
                      <v-text-field
                                v-model="props.item.comments1"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                         
                              
                      </td>




                      <td>
                         <v-text-field
                                v-model="props.item.comments2"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 

                      </td>
                      
                     

                      

                      
                    </template>

                    
                    </v-data-table>


                    <br/>

                  
                         
                    <v-layout wrap>
                    <v-flex xs12 lg6>
                   <SelectUsers v-on:getUsers="setSigners1($event)" label="PRINCIPAL: " />
                    </v-flex>

                    <v-flex xs12 lg6>
                   <SelectUsers v-on:getUsers="setSigners2($event)" label=" OFFICIAL: " />
                    </v-flex>
                </v-layout>

                    

             
                   

                    </v-flex>
                </v-layout>



                  <!-- 
              ================================================================
              C. DISTRICT DELEGATIONS
              ================================================================
              -->

                 <v-layout xs12 wrap border>
                  <v-flex>
                
                 <br/>

                    <h4><u>Section 2</u></h4>
                    <v-layout wrap>
              <v-flex xs3>
                <v-text-field v-model="doc.body.totalScore" type="number" label="TOTAL SCORE (64):"></v-text-field>
              </v-flex>
              <v-flex xs6>
 /64 (add the total scores in the columns above)
 </v-flex>
                    </v-layout>

               

                
                <v-data-table
                      :headers="headers45"
                      :items="doc.body.phase53"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>

                    

                      
                    

                    
                    </v-data-table>

                   



                    <v-data-table
                      :headers="headers46"
                      :items="doc.body.phase53"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>

                    <template v-slot:items="props" v-slot:no-data>

                     
                      
                        
                        <td >{{props.item.description}}</td>
                        <td >{{props.item.description1}}</td>
                      
                     
                    

                     <td>
                         <v-text-field
                                v-model="props.item.planx"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 

                      </td>




                      <td>
                         <v-text-field
                                v-model="props.item.planx1"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 

                      </td>
                      
                     

                      

                      
                    </template>

                    
                    </v-data-table>


                     <br/>

                    <h4><u>Form 2: Building Blocks Annual Management Plan 2019</u></h4>
                    
                    <br/>

                    <v-data-table
                      :headers="headers47"
                      :items="doc.body.phase54"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>

                    <template v-slot:items="props" v-slot:no-data>
                      
                        
                        <td >{{props.item.description}}</td>
                        

                        <td >
                            <v-layout wrap>

                                {{props.item.description1}}
                              <v-text-field
                                  v-model="props.item.comments"
                                  single-line
                                  solo
                                  flat
                                  placeholder
                                ></v-text-field>
                            </v-layout>
                        </td>

                         <td >
                            <v-layout wrap>
                              {{props.item.description2}}
                              <v-text-field
                                  v-model="props.item.comments1"
                                  single-line
                                  solo
                                  flat
                                  placeholder
                                ></v-text-field>
                            </v-layout>
                        </td>

                        
                      
                     
                    

                    
                      
                     

                      

                      
                    </template>

                    
                    </v-data-table>
                      
                      
                     

                      

                      
                   
             
                   

                    </v-flex>
                </v-layout>


             

               


                

                

                <br />


             

                <br />




              </v-card-text>







            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Vue from "vue";
import Toolbar from "~/components/FormToolbar";
import SelectUsers from "~/components/SelectUsers";
import store from "~/store/store";
import Editor from "@tinymce/tinymce-vue";
import { signatureHelpers } from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import record from "~/services/docLog";

import { createDoc } from "~/services/DocsService";

Vue.use(VueSignaturePad);
Vue.use(Editor);
export default {
  name: "BuildingBlocksforEffectiveSchool",
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
      menu4a: false,
      menu4b: false,
      menu5a: false,
      menu5b: false,
            

        headers40: [
       
        {
          text: "",
          align: "left",
          sortable: false,
          value: "",
          width: "30%"
        },
        {
          text: "<strong>Score by Departmental Official</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Final score<br/> per document by<br/> the Principal</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Final score<br/> per document  by<br/> the Official</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Comment by Departmental Official</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        }],

        headers41: [
       
        {
          text: "<strong>C.	Assets</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "30%"
        },
        {
          text: "<strong>Rating by the Principal</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Comments</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Rating by the Education Official</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Comments</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        }],

        headers42: [
       
        {
          text: "<strong>D.	Financial Management</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "30%"
        },
        {
          text: "<strong>Rating by the Principal</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Comments</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Rating by the Education Official</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Comments</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        }],

        headers43: [
       
        {
          text: "<strong>E.	Curriculum matters <br/> requiring SGB support</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "30%"
        },
        {
          text: "<strong>Rating by the Principal</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Comments</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Rating by the Education Official</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Comments</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        }],


         headers44: [
        
        {
          text: "<strong>12. C. DISTRICT DELEGATIONS</strong> <br /> <i>The following relate to district delegations. Please indicate the status of each by marking with a (X) in the appropriate box, and provide supporting evidence.</i>",
          align: "left",
          sortable: false,
          value: ""
        }
      ],

      headers45: [
        {
          text: "<strong>Name of the School: </strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "50%"
        },
        {
          text: "<strong>Rating by the Principal</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "25%"
        },
        {
          text: "<strong>Rating by the<br/> Departmental Official </strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "25%"
        }],

        headers46: [
        {
          text: "",
          align: "left",
          sortable: false,
          value: "",
          width: "25%"
        },
        {
          text: "",
          align: "left",
          sortable: false,
          value: "",
          width: "25%"
        },
        {
          text: "<strong>Indicate Percentage</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "25%"
        },
        {
          text: "<strong>Indicate Percentage</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "25%"
        }],

         headers47: [
        {
          text: "<strong>DATE</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>ACTIVITY</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>RESPONSIBILITY</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        }],
        
         headers48: [
        {
          text: "KEY AREA",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        },
        {
          text: "<strong>Ratings Descriptors</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "60%"
        }],

         headers49: [
        {
          text: "<strong>A.	Policies and Documents Legislated by SASA</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        },
        {
          text: "<strong>3</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>2</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>1</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>0</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        }],

        headers50: [
        {
          text: "B.	Meetings",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        },
        {
          text: "<strong>Ratings Descriptors</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "60%"
        }],

        headers51: [
        {
          text: "",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        },
        {
          text: "<strong>3</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>2</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>1</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>0</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        }],

        headers52: [
        {
          text: "C.	Assets",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        },
        {
          text: "<strong>Ratings Descriptors</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "60%"
        }],

        headers53: [
        {
          text: "D.	Financial Management",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        },
        {
          text: "<strong>Ratings Descriptors</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "60%"
        }],

         headers54: [
        {
          text: "Financial Management(Continued)",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        },
        {
          text: "<strong>Ratings Descriptors</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "60%"
        }],

         headers55: [
        {
          text: "E.	Curriculum matters requiring SGB",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        },
        {
          text: "<strong>Ratings Descriptors</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "60%"
        }],
        
        subheaders:[
          {text:'0<br/> Mark with an<br/> X', value:'0', sortable:false, align:'center', width:'10%'},
          {text:'1<br/> Mark with an<br/> X', value:'1', sortable:false, align:'center', width:'10%'},
          {text:'2<br/> Mark with an<br/> X', value:'2', sortable:false, align:'center', width:'10%'},
          {text:'3<br/> Mark with an<br/> X', value:'3', sortable:false, align:'center', width:'10%'},
          {text:'4<br/> Mark with an<br/> X', value:'4', sortable:false, align:'center', width:'10%'}
        ],

      iSign: false,
      doc: {
        ref: this.$route.params.ref,
        template: "BuildingBlocksforEffectiveSchool",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),

        body: {
          address: "",
          date: new Date().toISOString().substr(0, 10),
          date1: new Date().toISOString().substr(0, 10),
          date2: new Date().toISOString().substr(0, 10),
          date3: new Date().toISOString().substr(0, 10),
          date4: new Date().toISOString().substr(0, 10),
          nameOfSchool:"",
          emis:"",
          district:"",
          province:"",
          totalScore:"",


            subphase: [
            {
              one:"",
              two:"",
              three:"",
              four:""
            }],

            subphase1: [
            {
              one:"",
              two:"",
              three:"",
              four:""
            }],

            subphase2: [
            {
              one:"",
              two:"",
              three:"",
              four:""
            }],

            subphase3: [
            {
              one:"",
              two:"",
              three:"",
              four:""
            }],

            subphase4: [
            {
              one:"",
              two:"",
              three:"",
              four:""
            }],

            subphase5: [
            {
              one:"",
              two:"",
              three:"",
              four:""
            }],

            subphase6: [
            {
              one:"",
              two:"",
              three:"",
              four:""
            }],

            subphase7: [
            {
              one:"",
              two:"",
              three:"",
              four:""
            }],

            subphase8: [
            {
              one:"",
              two:"",
              three:"",
              four:""
            }],

            subphase9: [
            {
              one:"",
              two:"",
              three:"",
              four:""
            }],

            subphase10: [
            {
              one:"",
              two:"",
              three:"",
              four:""
            }],

            subphase11: [
            {
              one:"",
              two:"",
              three:"",
              four:""
            }],

            subphase12: [
            {
              one:"",
              two:"",
              three:"",
              four:""
            }],

            subphase13: [
            {
              one:"",
              two:"",
              three:"",
              four:""
            }],

            subphase14: [
            {
              one:"",
              two:"",
              three:"",
              four:""
            }],

            subphase15: [
            {
              one:"",
              two:"",
              three:"",
              four:""
            }],

            subphase16: [
            {
              one:"",
              two:"",
              three:"",
              four:""
            }],
            
          
            phase48: [
            {
              planning:"Annual Academic Performance Report (2018)",
              comments:"",
              comments1:"",
              comments2:""
            },
            {
              planning:"School Improvement Plan (2019)",
              comments:"",
              comments1:"",
              comments2:""
            },
            {
              planning:"School Development Plan(3 years)",
              comments:"",
              comments1:"",
              comments2:""
            },
            {
              planning:"School Timetable",
              comments:"",
              comments1:"",
              comments2:""
            },
            {
              planning:"Classroom Timetables",
              comments:"",
              comments1:"",
              comments2:""
            },
            {
              planning:"Teacher’s Personal Timetable",
              comments:"",
              comments1:"",
              comments2:""
            },
            {
              planning:"Quarterly Learner Achievement Data",
              comments:"",
              comments1:"",
              comments2:""
            },
            {
              planning:"Admission Register",
              comments:"",
              comments1:"",
              comments2:""
            },
            {
              planning:"Learner Attendance Register",
              comments:"",
              comments1:"",
              comments2:""
            },
            {
              planning:"Period Registers",
              comments:"",
              comments1:"",
              comments2:""
            },
            {
              planning:"Educator Daily Attendance Register",
              comments:"",
              comments1:"",
              comments2:""
            },
            {
              planning:"Educator Leave Register",
              comments:"",
              comments1:"",
              comments2:""
            },
            {
              planning:"School Assets Register",
              comments:"",
              comments1:"",
              comments2:""
            },
            {
              planning:"LTSM Assets Register",
              comments:"",
              comments1:"",
              comments2:""
            },
            {
              planning:"School Budget(2019)",
              comments:"",
              comments1:"",
              comments2:""
            },
            {
              planning:"Audited Financial Statements(2018)",
              comments:"",
              comments1:"",
              comments2:""
            }],


            phase50: [
            {
              planning:"Maintenance Plan",
              comments:"",
              comments1:""
            },
            {
              planning:"Procurement Plan",
              comments:"",
              comments1:""
            },
            {
              planning:"Asset Register (Non-perishables)",
              comments:"",
              comments1:""
            },
            {
              planning:"Inventory (Perishables)",
              comments:"",
              comments1:""
            },
            {
              planning:"Sub Total (12)",
              comments:"",
              comments1:""
            }],


             phase49: [
            {
              green:"",
              yellow:"",
              red:"",
            }],

            


           phase51: [
            {
              planning:"Approved Annual Budget",
              comments:"",
              comments1:""
            },
            {
              planning:"Audited Financial Statements",
              comments:"",
              comments1:""
            },
            {
              planning:"Spend allocated provincial  funds on LTSM accordingly",
              comments:"",
              comments1:""
            },
            {
              planning:"Spend allocated provincial  funds on Maintenance accordingly",
              comments:"",
              comments1:""
            },
            {
              planning:"Spend allocated provincial  funds on Municipal Service accordingly",
              comments:"",
              comments1:""
            },
            {
              planning:"Receipt books - branded",
              comments:"",
              comments1:""
            },
            {
              planning:"Requisition, Claim Forms and Invoices.",
              comments:"",
              comments1:""
            },
            {
              planning:"A system to pay Petty Cash that is monthly reconciled",
              comments:"",
              comments1:""
            },
            {
              planning:"Monthly  Cash Book:  Statements of  Receipts and Payments",
              comments:"",
              comments1:""
            },
            {
              planning:"Signatories:  EFT (Three people authorised to have PIN codes) / Cheques (Three signatories).",
              comments:"",
              comments1:""
            },
            {
              planning:"Sub Total (30)",
              comments:"",
              comments1:""
            }],

           phase52: [
            {
              planning:"Drafting of Annual Academic Report",
              comments:"",
              comments1:""
            },
            {
              planning:"Strategy to improve overall learner performance",
              comments:"",
              comments1:""
            },
            {
              planning:"Strategy to  improve learner performance in key subjects",
              comments:"",
              comments1:""
            },
            {
              planning:"Setting of realistic targets",
              comments:"",
              comments1:""
            },
            {
              planning:"Procurement of relevant textbooks per learner and per grade",
              comments:"",
              comments1:""
            },
            {
              planning:"Procurement of furniture",
              comments:"",
              comments1:""
            },
            {
              planning:"Utilization of resources in the school",
              comments:"",
              comments1:""
            },
            {
              planning:"Systems by parents to play an over site supporting role to effective learning",
              comments:"",
              comments1:""
            },
            {
              planning:"Reporting systems to hold staff and",
              comments:"",
              comments1:""
            },
            {
              planning:"Management plan for the school to provide progress report on learner performance ",
              comments:"",
              comments1:""
            },
            {
              planning:"Sub Total (30)",
              comments:"",
              comments1:""
            }],

            phase53: [
            {
              description:"5  - 51-64..……...+ 80%",
              description1:"School is Exceedingly Functional",
              planX:"",
              planX1:""
            },
            {
              description:"4 -  38-50……….…80%",
              description1:"School is Functional",
              planX:"",
              planX1:""
            },
            {
              description:"3 -  26-37…………60%",
              description1:"School is Manageable",
              planX:"",
              planX1:""
            },
            {
              description:"2 -  14-25…………40%",
              description1:"Needs Moderate Intervention",
              planX:"",
              planX1:""
            },
            {
              description:"1 -  0-13….……….20%",
              description1:"Needs Urgent Intervention",
              planX:"",
              planX1:""
            }],

            phase54: [
            {
              description:"08 to 15 April 2019",
              description1:"DBE sends Form 1 and Form 2 to PEDs by email",
              comments:"",
              description2:"EMGD – National Co-ordinator",
              comments1:"",
            },
            {
               description:"16 – 04 – 2019 to 26 – 04 - 2019",
              description1:"PEDs sends documents to Districts by email",
              comments:"",
              description2:"EMGD – Provincial Co-ordinators",
              comments1:"",
            },
            {
              description:"29 – 04 – 2019 to 10 – 05 - 2019",
              description1:"Districts sends documents to schools in hard and soft copies",
              comments:"",
              description2:"EMGD -  District Co-ordinators",
              comments1:"",
            },
            {
              description:"13 – 05 – 2019 to 31 – 05 - 2019",
              description1:"Districts mediate the tool to schools’ Principal",
              comments:"",
              description2:"EMGD -  District Co-ordinators",
              comments1:"",
            },
            {
              description:"03 – 06 – 2019 to 21 -  06 - 2019",
              description1:"Schools interact with the form/template",
              comments:"",
              description2:"SMT and SGB",
              comments1:"",
            },
            {
              description:"15 – 07 – 2019 to 08 – 08 - 2019",
              description1:"Districts verify completed documents in schools",
              comments:"",
              description2:"Circuit Managers",
              comments1:"",
            },
            {
              description:"12 – 08 – 2019 to 06 – 09 – 2019",
              description1:"PEDs analyse and interpret the verified documents",
              comments:"",
              description2:"EMGD – Provincial Co-ordinators",
              comments1:"",
            },
            {
              description:"09 – 09 – 2019 to 20 – 09 - 2019",
              description1:"DBE Monitor the Verification of the Building Blocks by PEDs",
              comments:"",
              description2:"EMGD – DBE Officials",
              comments1:"",
            },
            {
              description:"23 – 09 – 2019 to 25 – 10 - 2019",
              description1:"Submission of verified, analysed and interpreted documents to DBE – EMGD Co-ordinator",
              comments:"",
              description2:"Provincial Co-ordinators",
              comments1:"",
            },
            {
              description:"28 – 10 – 2019 to 22 – 11 - 2019",
              description1:"Data Capturing of (Form 1) received documents from PEDs",
              comments:"",
              description2:"DBE – EMGD",
              comments1:"",
            },
            {
              description:"26 – 11 - 2019",
              description1:"Provisional Report to Provincial Officials during the Interprovincial Meeting",
              comments:"",
              description2:"DBE - EMGD",
              comments1:"",
            },
            {
              description:"03 – 02 – 2020 to 14 – 02 - 2020",
              description1:"Visit to selected schools to verify data",
              comments:"",
              description2:"EMGD – National Team",
              comments1:"",
            },
            {
              description:"17 – 02 – 2020 to 28 – 02 - 2020",
              description1:"Analysis and interpretation of data collected and captured",
              comments:"",
              description2:"DBE – EMGD",
              comments1:"",
            },
            {
              description:"02 – 03 – 2020 to 13 – 03 - 2020",
              description1:"Compilation of Performance Information Report, PowerPoint Presentation, Quarter 4 Report and Building Blocks Composite Report",
              comments:"",
              description2:"DBE – EMGD",
              comments1:"",
            },
            {
              description:"20 – 03 - 2020",
              description1:"SUBMISSION OF THE NATIONAL ANNUAL REPORT TO THE CHIEF DIRECTORY",
              comments:"",
              description2:"DBE – EMGD",
              comments1:"",
            },
            {
              description:"02 – 06 - 2020",
              description1:"Presentation of the Composite Report to Interprovincial Meeting and Storage at DBE Unit",
              comments:"",
              description2:"EMGD - National Co-ordinator",
              comments1:"",
            }],

            


          

          docRef: Math.round(+new Date() / 1000),
          attachments: [],
          authorSignature: "",
          signatures: [],
          signatures2: []
        }
      },

      signature: null,
      snackbarText: "",
      snackbar: false,
      snackbarColor: "success",
      loading: false,
      min_height: 320,
      plugins:
        "fullscreen print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern help",
      toolbar:
        "fullscreen | basicDateButton | formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat"
    };
  },
  computed: {
    time() {
      return Date.now();
    },
    users() {
      return store.state.users;
    }
  },
  methods: {
    ...signatureHelpers(),
    setRecipients(users) {
      this.doc.recipients = users;
    },
    setSigners(users) {
      this.doc.body.signatures.push(users);
    },
     setSigners1(users) {
      this.doc.body.signatures.push(users);
    },
     setSigners2(users) {
      this.doc.body.signatures.push(users);
    },
    onEnd() {
      this.setAuthorSignature();
    },
    addRow() {
      this.doc.body.phase9.push({});
    },
    removeRow(index) {
      this.doc.body.phase9.splice(index, 1);
    }
  },

  created() {
    console.log(store.state.users);
    console.log(this.$route);
  }
};
</script>

<style>
.side-toolbar {
  position: fixed;
  max-width: 180px;
}

table {
  border-collapse: collapse;
}

.main-heading {
  border: 2px solid #dddddd;
  padding: 5%;
  border-radius: 5px;
}
.sub-items {
  padding: 5%;
  margin: 0 0 45px 50px;
}



.card-border {
  border: 2px solid #dddddd;
  padding: 5px 10px;
}



td,
th {
  border: 1px solid #dddddd;
}

.signature-pad {
  max-width: 480px;
  background-color: #fff;
  border: 1px dotted black;
}

.terms_conditions {
  list-style: initial;
}

.styled-input {
  min-width: 200px;
  /* font-size: 20pt; */
}
</style>
