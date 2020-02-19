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
            </v-flex> -->
                <v-layout wrap>
                    <v-flex xs12>
    
    
                        <v-card>
                            <br/>
                            
                            <v-flex xs6 offset-xs3>
                                <h3 class="text-xs-center ">SCHOOL LEVEL MONITORING TOOL</h3>
                            </v-flex>
                            
                          
                                 <br/>
                                 <br/>

                                <!-- 
                                =====================================
                                INSTRUCTIONS FOR THE COMPLETION OF THE QUESTIONNARE
                                =====================================
                                -->

                                 <v-card-text class="pt-0 mt-0">

                                    
                               
    
                                <v-layout xs12 wrap border class="card-border">
                                    
                                    <v-flex>
                                        <p>
                                            This tool includes questions about the school for the response of the school 
                                            principal or person acting as school principal during the first Term of the 
                                            academic year by a Monitor. In terms of the National Education Policy Act ( 1996) 
                                            and the South African Schools Act, it is necessary to ensure that accountability 
                                            for quality education is supported by monitoring and support of teaching and 
                                            learning. This tool allows for those monitoring schools to focus on critical 
                                            indicators in relation to learner performance, curriculum coverage, improving 
                                            attendance, increasing access to materials for teaching and learning including 
                                            textbooks and workbooks, better school management, and lesson planning, among 
                                            others. <span class="red--text text">Visits should not disrupt teaching time and evidence for the collected 
                                            information should be checked (registration, attendance registers, as well as 
                                            timetables and schedules must be checked to verify accuracy of information provided)</span>. 
                                            This tool may be used in addition to other oversight mechanisms.</p>
                                        
    
    
                                    </v-flex>
                                </v-layout>
                            </v-card-text>

                            
    
                            <br />
                            <br />




                             <!-- 
                            =====================================
                            1. SCHOOL INFORMATION
                            =====================================
                            -->

                            <v-card-text class="pt-0 mt-0">

                                <v-layout xs12 wrap border>
                                    <v-flex>
                                        <v-layout xs12 wrap border class="heading-bg">
                                            <v-flex xs12>
                                                <h4 class="text-xs-left">1. SCHOOL INFORMATION</h4>
                                                <i>Please verify the pre-populated and loaded information.</i>
                                             </v-flex>
                                        </v-layout>

                                       

                    <v-data-table
                      :headers="headers27"
                      :items="doc.body.phase28"
                      hide-actions
                      class="elevation-1"
                    >
<template slot="headerCell" slot-scope="props">
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
                                <span v-on="on">{{ props.header.text }}</span>
</template>
                          <h4>{{ props.header.text }}</h4>
                        </v-tooltip>
                      </template>

<template v-slot:items="props" v-slot:no-data>
    <td class="px-0 py-0">
         <v-layout wrap>
            <v-flex xs1> 1.{{ props.index + 1 }}</v-flex>
            <v-flex>{{props.item.description}}</v-flex>
        </v-layout>
    </td>
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
</template>

<template v-slot:no-data>
    <div :value="true" class="text-xs-center">
        No Form Input Fields</div>
</template>
                    </v-data-table>


                    <v-data-table
                        :headers="headers33"
                        :items="doc.body.phase1"
                        hide-actions
                        class="elevation-1"
                        >
                            <template slot="headerCell" slot-scope="props">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <span v-on="on">{{ props.header.text }}</span>
                                    </template>
                                    <span>{{ props.header.text }}</span>
                                </v-tooltip>
                            </template>
                        </v-data-table>





                

                    <v-data-table
                      :headers="headers28"
                      :items="doc.body.phase11"
                      hide-actions
                      class="elevation-1"
                    >
<template slot="headerCell" slot-scope="props">
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
                                <span v-on="on">{{ props.header.text }}</span>
</template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

<template v-slot:items="props" v-slot:no-data>
     <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td><td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td><td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
     <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    

</template>

<template v-slot:no-data>
    <div :value="true" class="text-xs-center">
        No Form Input Fields</div>
</template>
                    </v-data-table>

                    


                    <v-data-table
                      :headers="headers29"
                      :items="doc.body.phase29"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <span v-on="on">{{ props.header.text }}</span>
                            </template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>


<template v-slot:items="props" v-slot:no-data>
    <td class="px-0 py-0">
        <v-layout wrap>
            <v-flex xs1> 1.{{ props.index + 18 }}</v-flex>
            <v-flex>{{props.item.description}}</v-flex>
        </v-layout>
    </td>
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
   <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>

        
</template>

<template v-slot:no-data>
    <div :value="true" class="text-xs-center">
        No Form Input Fields</div>
</template>
                    </v-data-table>
                      <v-data-table
                        :headers="headers30"
                        :items="doc.body.phase1"
                        hide-actions
                        class="elevation-1"
                        >
                            <template slot="headerCell" slot-scope="props">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <span v-on="on">{{ props.header.text }}</span>
                                    </template>
                                    <span>{{ props.header.text }}</span>
                                </v-tooltip>
                            </template>
                        </v-data-table>


                         <v-data-table
                      :headers="headers32"
                      :items="doc.body.phase11"
                      hide-actions
                      class="elevation-1"
                    >
<template slot="headerCell" slot-scope="props">
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
                                <span v-on="on">{{ props.header.text }}</span>
</template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

<template v-slot:items="props" v-slot:no-data>
     
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td><td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td><td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
     <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    

</template>

<template v-slot:no-data>
    <div :value="true" class="text-xs-center">
        No Form Input Fields</div>
</template>
                    </v-data-table>




              
                            <!-- 
                            =====================================
                            2. Human Resource Provisioning
                            =====================================
                            -->

                            <!-- <v-card-text class="pt-0 mt-0">

                                <v-layout xs12 wrap border>
                                    <v-flex> -->
                                        <v-layout xs12 wrap border class="heading-bg">
                                            <v-flex xs12>
                                                <h4 class="text-xs-left">2. Human Resource Provisioning</h4>
                                                <i>lease complete the following question on Human Resources Provisioning.</i>
                                             </v-flex>
                                        </v-layout>

                                        <v-data-table
                                        :headers="headers1"
                                        :items="doc.body.phase1"
                                        hide-actions
                                        class="elevation-1"
                                        >
                                            <template slot="headerCell" slot-scope="props">
                                                <v-tooltip bottom>
                                                    <template v-slot:activator="{ on }">
                                                        <span v-on="on">{{ props.header.text }}</span>
                                                    </template>
                                                    <span>{{ props.header.text }}</span>
                                                </v-tooltip>
                                            </template>
                                        </v-data-table>

                    <v-data-table
                      :headers="headers5"
                      :items="doc.body.phase5"
                      hide-actions
                      class="elevation-1"
                    >
<template slot="headerCell" slot-scope="props">
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
                                <span v-on="on">{{ props.header.text }}</span>
</template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

<template v-slot:items="props" v-slot:no-data>
    <td class="px-0 py-0">
         {{props.item.description}}
    </td>
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
</template>

<template v-slot:no-data>
    <div :value="true" class="text-xs-center">
        No Form Input Fields</div>
</template>
                    </v-data-table>




                 <v-data-table
                      :headers="headers6"
                      :items="doc.body.phase1"
                      hide-actions
                      class="elevation-1"
                    >
<template slot="headerCell" slot-scope="props">
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
                                <span v-on="on">{{ props.header.text }}</span>
</template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers7"
                      :items="doc.body.phase11"
                      hide-actions
                      class="elevation-1"
                    >
<template slot="headerCell" slot-scope="props">
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
                                <span v-on="on">{{ props.header.text }}</span>
</template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

<template v-slot:items="props" v-slot:no-data>
     <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
 <td class="text-xs-center px-0 py-0">
        <v-icon small color="red " @click="removeRow(props.index)">delete</v-icon>
    </td>
</template>

<template v-slot:no-data>
    <div :value="true" class="text-xs-center">
        No Form Input Fields</div>
</template>

<template v-slot:footer>
    <td colspan="12" class="text-xs-center px-0 py-0 mx-0 primary">
        <v-icon @click="addRow" color="white">add</v-icon>
    </td>
</template>
                    </v-data-table>


                    <!-- 
                    =====================================
                    3. TIME ON TASK: TEACHING AND LEARNING
                    =====================================
                    -->


                    <v-layout xs12 wrap border class="heading-bg">
                                         <v-flex xs12>
                                      <h4 class="text-xs-left">3. TIME ON TASK: TEACHING AND LEARNING</h4>
                                      <p><i>Please select the appropriate response by making a (X) in the correct box. 
                                          This will be applicable if the tool is not administered at the beginning of Term 1.</i></P>
                                      
   
                                      </v-flex>
                                 </v-layout>
                                 <v-data-table
                      :headers="headers2"
                      :items="doc.body.phase15"
                      hide-actions
                      class="elevation-1"
                    >
<template slot="headerCell" slot-scope="props">
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
                                <span v-on="on">{{ props.header.text }}</span>
</template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

<template v-slot:items="props" v-slot:no-data>
    <td class>
        {{ props.item.description }}</td>
    
    <td>
        <v-radio-group v-model="props.item.boolean" :mandatory="false">
            <v-radio label="Yes" value="Yes"></v-radio>
            <v-radio label="No" value="No"></v-radio>
        </v-radio-group>
    </td>
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
</template>

<template v-slot:no-data>
    <div :value="true" class="text-xs-center">
        No Form Input Fields</div>
</template>
                    </v-data-table>

                     <!-- 
                    =====================================
                    4. LTSM
                    =====================================
                    -->

                   

                    <v-layout xs12 wrap border class="heading-bg">
                                         <v-flex xs12>
                                      <h4 class="text-xs-left">4. LTSM</h4>
                                      <p><i>The following questions relate to learner and teacher support materials.</i></P>
                                      
   
                                      </v-flex>
                                 </v-layout>

                    <v-data-table
                      :headers="headers3"
                      :items="doc.body.phase1"
                      hide-actions
                      class="elevation-1"
                    >
<template slot="headerCell" slot-scope="props">
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
                                <span v-on="on">{{ props.header.text }}</span>
</template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers4"
                      :items="doc.body.phase4"
                      hide-actions
                      class="elevation-1"
                    >
<template slot="headerCell" slot-scope="props">
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
                                <span v-on="on">{{ props.header.text }}</span>
</template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

<template v-slot:items="props" v-slot:no-data>
     <td class="px-0 py-0">
         {{props.item.description}}
    </td>
     
   <td class="px-0 py-0">
        <div v-if="props.index == 1 ||
         props.index == 2 || 
         props.index == 3 || 
         props.index == 4 || 
         props.index == 5 || 
         props.index == 6 || 
         props.index == 7 || 
         props.index == 8 || 
         props.index == 9 || 
         props.index == 10 || 
         props.index == 11 || 
         props.index == 12 || 
         props.index == 13 || 
         props.index == 14 || 
         props.index == 15">
                
            <v-layout wrap >
            
                <v-flex >
                    <div class="black-block">{{ props.item.descriptionArray}}</div>
                </v-flex>
            </v-layout>
            
        </div>
        <div v-else>
          <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
        </div>
        
    </td>
   
    <td class="px-0 py-0">
        <div v-if="props.index == 0 || 
        props.index == 12 || 
        props.index == 13 || 
        props.index == 14 || 
        props.index == 15">
                
            <v-layout wrap >
            
                <v-flex >
                    <div class="black-block">{{ props.item.descriptionArray}}</div>
                </v-flex>
            </v-layout>
            
        </div>
        <div v-else>
          <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
        </div>
        
    </td>
   
    <td class="px-0 py-0">
        <div v-if="props.index == 0 || 
        props.index == 1 || 
        props.index == 2 || 
        props.index == 3 || 
        props.index == 12 || 
        props.index == 13 || 
        props.index == 14 || 
        props.index == 15">
                
            <v-layout wrap >
            
                <v-flex >
                    <div class="black-block">{{ props.item.descriptionArray}}</div>
                </v-flex>
            </v-layout>
            
        </div>
        <div v-else>
          <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
        </div>
        
    </td>
    <td class="px-0 py-0">
        <div v-if="props.index == 0 || 
        props.index == 1 || 
        props.index == 2 || 
        props.index == 3 || 
        props.index == 12 || 
        props.index == 13 || 
        props.index == 14 || 
        props.index == 15">
                
            <v-layout wrap >
            
                <v-flex >
                    <div class="black-block">{{ props.item.descriptionArray}}</div>
                </v-flex>
            </v-layout>
            
        </div>
        <div v-else>
          <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
        </div>
        
    </td>
    <td class="px-0 py-0">
       <div v-if="props.index == 0 || 
       props.index == 1 || 
       props.index == 2 || 
       props.index == 3 || 
       props.index == 12 || 
       props.index == 13 || 
       props.index == 14 || 
       props.index == 15">
                
            <v-layout wrap >
            
                <v-flex >
                    <div class="black-block">{{ props.item.descriptionArray}}</div>
                </v-flex>
            </v-layout>
            
        </div>
        <div v-else>
          <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
        </div>
        
    </td>
    <td class="px-0 py-0">
        <div v-if="props.index == 0 || 
        props.index == 1 || 
        props.index == 2 || 
        props.index == 3 || 
        props.index == 4 ||
        props.index == 12 || 
        props.index == 13 || 
        props.index == 14 || 
        props.index == 15">
                
            <v-layout wrap >
            
                <v-flex >
                    <div class="black-block">{{ props.item.descriptionArray}}</div>
                </v-flex>
            </v-layout>
            
        </div>
        <div v-else>
          <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
        </div>
        
    </td>
    <td class="px-0 py-0">
        <div v-if="props.index == 0 || 
        props.index == 1 || 
        props.index == 2 || 
        props.index == 3 || 
        props.index == 4 ||
        props.index == 12 || 
        props.index == 13 || 
        props.index == 14 || 
        props.index == 15">
                
            <v-layout wrap >
            
                <v-flex >
                    <div class="black-block">{{ props.item.descriptionArray}}</div>
                </v-flex>
            </v-layout>
            
        </div>
        <div v-else>
          <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
        </div>
        
    </td>
     <td class="px-0 py-0">
       <div v-if="props.index == 0 || props.index == 1 || props.index == 2 || props.index == 3  || props.index == 4">
                
            <v-layout wrap >
            
                <v-flex >
                    <div class="black-block">{{ props.item.descriptionArray}}</div>
                </v-flex>
            </v-layout>
            
        </div>
        <div v-else>
          <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
        </div>
        
    </td>
</template>

<template v-slot:no-data>
    <div :value="true" class="text-xs-center">
        No Form Input Fields</div>
</template>
                    </v-data-table>




                  <v-data-table
                      :headers="headers2"
                      :items="doc.body.phase16"
                      hide-actions
                      class="elevation-1"
                    >
<template slot="headerCell" slot-scope="props">
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
                                <span v-on="on">{{ props.header.text }}</span>
</template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

<template v-slot:items="props" v-slot:no-data>
    <td class>
        {{ props.item.description }}</td>
    
    <td>
        <v-radio-group v-model="props.item.boolean" :mandatory="false">
            <v-radio label="Yes" value="Yes"></v-radio>
            <v-radio label="No" value="No"></v-radio>
        </v-radio-group>
    </td>
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
</template>

<template v-slot:no-data>
    <div :value="true" class="text-xs-center">
        No Form Input Fields</div>
</template>
                    </v-data-table>


                    <v-data-table
                      
                      :items="doc.body.phase23"
                      hide-actions
                      class="elevation-1"
                    >


<template v-slot:items="props" v-slot:no-data>
    <td class="px-0 py-0">
       {{props.item.description}}</td>
    <td class>
       <v-select
            :items="doc.body.items"
            label="SELECT"
            outlined
            ></v-select>
        </td>

        
</template>

<template v-slot:no-data>
    <div :value="true" class="text-xs-center">
        No Form Input Fields</div>
</template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers8"
                      :items="doc.body.phase8"
                      hide-actions
                      class="elevation-1"
                    >
<template slot="headerCell" slot-scope="props">
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
                                <span v-on="on">{{ props.header.text }}</span>
</template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

<template v-slot:items="props" v-slot:no-data>
    <td class>
        {{ props.item.description }}</td>
    
    <td>
        <v-radio-group v-model="props.item.boolean" :mandatory="false">
            <v-radio label="Yes" value="Yes"></v-radio>
            <v-radio label="No" value="No"></v-radio>
        </v-radio-group>
    </td>
</template>

<template v-slot:no-data>
    <div :value="true" class="text-xs-center">
        No Form Input Fields</div>
</template>
                    </v-data-table>



                    <v-data-table
                      :items="doc.body.phase7"
                      hide-actions
                      class="elevation-1"
                    >
<template slot="headerCell" slot-scope="props">
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
                                <span v-on="on">{{ props.header.text }}</span>
</template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

<template v-slot:items="props" v-slot:no-data>
                       
                       <td class="px-0 py-0">
                         {{props.item.description}}
                        </td>
    
                        <td class="px-0 py-0 styled-description">
                         {{props.item.description1}}
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.comment"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0 styled-description">
                         {{props.item.description2}}
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.comment"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                      </template>

<template v-slot:no-data>
    <div :value="true" class="text-xs-center">
        No Form Input Fields</div>
</template>
                    </v-data-table>

                    </v-data-table>




                  <v-data-table
                      :headers="headers"
                      :items="doc.body.phase"
                      hide-actions
                      class="elevation-1"
                    >
<template slot="headerCell" slot-scope="props">
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
                                <span v-on="on">{{ props.header.text }}</span>
</template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

<template v-slot:items="props" v-slot:no-data>
    <td class>
        {{ props.item.description }}</td>
    
    <td>
        <v-radio-group v-model="props.item.boolean" :mandatory="false">
            <v-radio label="Yes" value="Yes"></v-radio>
            <v-radio label="No" value="No"></v-radio>
        </v-radio-group>
    </td>
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
</template>

<template v-slot:no-data>
    <div :value="true" class="text-xs-center">
        No Form Input Fields</div>
</template>
                    </v-data-table>


                    <v-data-table
                      :headers="headers13"
                      :items="doc.body.phase1"
                      hide-actions
                      class="elevation-1"
                    >
<template slot="headerCell" slot-scope="props">
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
                                <span v-on="on">{{ props.header.text }}</span>
</template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers14"
                      :items="doc.body.phase14"
                      hide-actions
                      class="elevation-1"
                    >
<template slot="headerCell" slot-scope="props">
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
                                <span v-on="on">{{ props.header.text }}</span>
</template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

<template v-slot:items="props" v-slot:no-data>
    <td class="px-0 py-0">
         {{props.item.description}}
    </td>
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
</template>

<template v-slot:no-data>
    <div :value="true" class="text-xs-center">
        No Form Input Fields</div>
</template>
                    </v-data-table>





                     <!-- 
                    =====================================
                    5. CAREANDSUPPORTOFLEARNERS
                    =====================================
                    -->

                   

                    <v-layout xs12 wrap border class="heading-bg">
                                         <v-flex xs12>
                                      <h4 class="text-xs-left">5. CAREANDSUPPORTOFLEARNERS</h4>
                                      <p><i>The following questions relate to care and support provided at the school.
                                           Please select the appropriate response by making a (X) in the correct box.</i></P>
                                      
   
                                      </v-flex>
                                 </v-layout>

                  

                    <v-data-table
                      
                      :items="doc.body.phase21"
                      hide-actions
                      class="elevation-1"
                    >


<template v-slot:items="props" v-slot:no-data>
    <td class="px-0 py-0">
       {{props.item.description}}</td>
    <td class>
       <v-select
            :items="doc.body.items1"
            label="SELECT"
            outlined
            ></v-select>
        </td>

        
</template>

<template v-slot:no-data>
    <div :value="true" class="text-xs-center">
        No Form Input Fields</div>
</template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers9"
                      :items="doc.body.phase9"
                      hide-actions
                      class="elevation-1"
                    >
<template slot="headerCell" slot-scope="props">
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
                                <span v-on="on">{{ props.header.text }}</span>
</template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

<template v-slot:items="props" v-slot:no-data>
    <td class>
        {{ props.item.description }}</td>
    <td class>
        <div v-if="props.index == 2">
                              <div v-for = "n in 3" :key="n">
                                <v-layout wrap >
                                <!-- <v-flex xs1>
                                  {{ n }}.
                                </v-flex> -->
                                 <v-flex class="array-padding">
                                   {{ props.item.description1[n] }}
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>
        </td>    
    
    <td>
        <div v-if="props.index == 2">
            <div v-for = "n in 2" :key="n">
                <v-layout wrap >
                    <v-flex >
                        <v-radio-group v-model="props.item.boolean[n]" :mandatory="false">
                            <v-radio label="Yes" value="Yes"></v-radio>
                            <v-radio label="No" value="No"></v-radio>
                        </v-radio-group>
                    </v-flex>
                </v-layout>
            </div>
        </div>
        <v-radio-group v-model="props.item.boolean" :mandatory="false">
            <v-radio label="Yes" value="Yes"></v-radio>
            <v-radio label="No" value="No"></v-radio>
        </v-radio-group>
    </td>
</template>

<template v-slot:no-data>
    <div :value="true" class="text-xs-center">
        No Form Input Fields</div>
</template>
                    </v-data-table>



                     <!-- 
                    =====================================
                    6. MANAGEMENT, GOVERNANCE AND DISTRICT SUPPORT
                    =====================================
                    -->

                   

                    <v-layout xs12 wrap border class="heading-bg">
                                         <v-flex xs12>
                                      <h4 class="text-xs-left">6. MANAGEMENT, GOVERNANCE AND DISTRICT SUPPORT</h4>
                                      <p><i>TThe following questions relate to management,
                                           governance and district support. Please select 
                                           the appropriate response by making a (X) in the correct box.</i></P>
                                      
   
                                      </v-flex>
                                 </v-layout>

                  

                    <v-data-table
                      
                      :items="doc.body.phase22"
                      hide-actions
                      class="elevation-1"
                    >


<template v-slot:items="props" v-slot:no-data>
    <td class="px-0 py-0">
       {{props.item.description}}</td>
   
        <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
        

        
</template>

<template v-slot:no-data>
    <div :value="true" class="text-xs-center">
        No Form Input Fields</div>
</template>
                    </v-data-table>

                     <v-data-table
                      :headers="headers16"
                      :items="doc.body.phase1"
                      hide-actions
                      class="elevation-1"
                    >
<template slot="headerCell" slot-scope="props">
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
                                <span v-on="on">{{ props.header.text }}</span>
</template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers10"
                      :items="doc.body.phase10"
                      hide-actions
                      class="elevation-1"
                    >
<template slot="headerCell" slot-scope="props">
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
                                <span v-on="on">{{ props.header.text }}</span>
</template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

<template v-slot:items="props" v-slot:no-data>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
     <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
</template>

<template v-slot:no-data>
    <div :value="true" class="text-xs-center">
        No Form Input Fields</div>
</template>
                    </v-data-table>

                     <v-data-table
                      :headers="headers18"
                      :items="doc.body.phase1"
                      hide-actions
                      class="elevation-1"
                    >
<template slot="headerCell" slot-scope="props">
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
                                <span v-on="on">{{ props.header.text }}</span>
</template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>
                    </v-data-table>


                    <v-data-table
                      :headers="headers10"
                      :items="doc.body.phase10"
                      hide-actions
                      class="elevation-1"
                    >
<template slot="headerCell" slot-scope="props">
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
                                <span v-on="on">{{ props.header.text }}</span>
</template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

<template v-slot:items="props" v-slot:no-data>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
     <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
</template>

<template v-slot:no-data>
    <div :value="true" class="text-xs-center">
        No Form Input Fields</div>
</template>
                    </v-data-table>

                    </v-data-table>


                     <v-data-table
                      
                      :items="doc.body.phase24"
                      hide-actions
                      class="elevation-1"
                    >


<template v-slot:items="props" v-slot:no-data>
    <td class="px-0 py-0">
       {{props.item.description}}</td>
   
        <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
        

        
</template>

<template v-slot:no-data>
    <div :value="true" class="text-xs-center">
        No Form Input Fields</div>
</template>
                    </v-data-table>


                     <v-data-table
                      
                      :items="doc.body.phase25"
                      hide-actions
                      class="elevation-1"
                    >


<template v-slot:items="props" v-slot:no-data>
    <td class="px-0 py-0">
       {{props.item.description}}</td>
   
        <td class="px-0 py-0">
        <v-menu v-model="menu3a" :close-on-content-click="false" :nudge-right="40"
                      transition="scale-transition" offset-y min-width="290px">
                      <template v-slot:activator="{ on }">
                        <v-text-field v-model="doc.body.date3" label="Date " readonly v-on="on">
                        </v-text-field>
                      </template>
                      <v-date-picker v-model="doc.body.date3" @input="menu3b = false"></v-date-picker>
                    </v-menu>
    </td>
        

        
</template>

<template v-slot:no-data>
    <div :value="true" class="text-xs-center">
        No Form Input Fields</div>
</template>
                    </v-data-table>


                     <v-data-table
                      :headers="headers27"
                      :items="doc.body.phase1"
                      hide-actions
                      class="elevation-1"
                    >
<template slot="headerCell" slot-scope="props">
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
                                <span v-on="on">{{ props.header.text }}</span>
</template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers28"
                      :items="doc.body.phase15"
                      hide-actions
                      class="elevation-1"
                    >
<template slot="headerCell" slot-scope="props">
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
                                <span v-on="on">{{ props.header.text }}</span>
</template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

<template v-slot:items="props" v-slot:no-data>
    <td class="px-0 py-0">
         {{props.item.description}}
    </td>
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    <td class="px-0 py-0">
        <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
    </td>
    
</template>

<template v-slot:no-data>
    <div :value="true" class="text-xs-center">
        No Form Input Fields</div>
</template>
                    </v-data-table>

                     <v-data-table
                      
                      :items="doc.body.phase26"
                      hide-actions
                      class="elevation-1"
                    >


<template v-slot:items="props" v-slot:no-data>
    <td class="px-0 py-0">
       {{props.item.description}}</td>
   
        <td class="px-0 py-0">
        <v-menu v-model="menu3a" :close-on-content-click="false" :nudge-right="40"
                      transition="scale-transition" offset-y min-width="290px">
                      <template v-slot:activator="{ on }">
                        <v-text-field v-model="doc.body.date3" label="Date " readonly v-on="on">
                        </v-text-field>
                      </template>
                      <v-date-picker v-model="doc.body.date3" @input="menu3b = false"></v-date-picker>
                    </v-menu>
    </td>
        

        
</template>

<template v-slot:no-data>
    <div :value="true" class="text-xs-center">
        No Form Input Fields</div>
</template>
                    </v-data-table>

                    




                  </v-flex>
                </v-layout>
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
    name: "Checklist",
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

            headers1: [{
                text: "2.1 Please indicate the number of teachers employed at the school by type.",
                align: "left",
                sortable: false,
                value: ""
                //   width: "10%"
            }],

            headers27: [{
                    text: "6.5 Please indicate the number of the school governing body members by type?",
                    align: "left",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                }
            ],

            headers28: [{
                    text: "-",
                    align: "left",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "Parents",
                    align: "left",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "Teachers",
                    align: "left",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "Non-educators",
                    align: "left",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "Learners",
                    align: "left",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                }
            ],
            headers29: [
                {
                    text: "-",
                    align: "left",
                    sortable: false,
                    value: "",
                    width: "50%"
                },
                {
                    text: "FOUNDATION",
                    align: "left",
                    sortable: false,
                    value: "",
                    width: "50%"
                },
                {
                    text: "INTERMEDIATE",
                    align: "left",
                    sortable: false,
                    value: "",
                    width: "50%"
                },
                {
                    text: "SENIOR",
                    align: "left",
                    sortable: false,
                    value: "",
                    width: "50%"
                },
                {
                    text: "FET",
                    align: "left",
                    sortable: false,
                    value: "",
                    width: "50%"
                }
            ],
            headers30: [{
                    text: "1.19 Please indicate the type of sporting codes and extramural activities in your school.",
                    align: "left",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                }],
              
            headers31: [{
                    text: "DAY",
                    align: "left",
                    sortable: false,
                    value: "",
                    width: "16.5%"
                },
                {
                    text: "MONTH",
                    align: "left",
                    sortable: false,
                    value: "",
                    width: "16.5%"
                },
                {
                    text: "YEAR",
                    align: "left",
                    sortable: false,
                    value: "",
                    width: "16.5%"
                }
                ,
                {
                    text: "COUNTRY",
                    align: "left",
                    sortable: false,
                    value: "",
                    width: "16.5%"
                }
                ,
                {
                    text: "PLACE",
                    align: "left",
                    sortable: false,
                    value: "",
                    width: "16.5%"
                }
                ,
                {
                    text: "PHONE NO.",
                    align: "left",
                    sortable: false,
                    value: "",
                    width: "16.5%"
                }
            ],
            headers32: [
                {
                    text: "NETBALL",
                    align: "center",
                    sortable: false,
                    value: "",
                    width: "49.5%"
                },
                {
                    text: "ATHLETICS",
                    align: "center",
                    sortable: false,
                    value: "",
                    width: "49.5%"
                },
                {
                    text: "SOCCER",
                    align: "center",
                    sortable: false,
                    value: "",
                    width: "49.5%"
                },
                {
                    text: "RUGBY",
                    align: "center",
                    sortable: false,
                    value: "",
                    width: "49.5%"
                },
                {
                    text: "TENNIS",
                    align: "center",
                    sortable: false,
                    value: "",
                    width: "49.5%"
                },
                {
                    text: "CULTURAL ACTIVITIES",
                    align: "center",
                    sortable: false,
                    value: "",
                    width: "49.5%"
                },
                {
                    text: "CHORAL MUSIC",
                    align: "center",
                    sortable: false,
                    value: "",
                    width: "49.5%"
                },
                {
                    text: "HOCKEY",
                    align: "center",
                    sortable: false,
                    value: "",
                    width: "49.5%"
                },
                {
                    text: "OTHER. PLEASE SPECIFY",
                    align: "center",
                    sortable: false,
                    value: "",
                    width: "49.5%"
                }
            ],
            headers33: [{
                    text: "1.17 Number of learners enrolled by Grade.",
                    align: "left",
                    sortable: false,
                    value: ""
            }],
             headers34: [{
                    text: "QUALIFICATIONS OBTAINED",
                    align: "left",
                    sortable: false,
                    value: ""
                },
                {
                    text: "NAME OF SCHOOL OR INSTITUTION",
                    align: "left",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "CITY/TOWN AND COUNTRY",
                    align: "left",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "FROM",
                    align: "left",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "TO",
                    align: "left",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "ACTIONS",
                    sortable: false,
                    value: "scarbs"
                }
            ],
            headers2: [{
                    text: "QUESTIONS",
                    align: "left",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                
                {
                    text: "FINDINGS",
                    align: "left",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                
                {
                    text: "COMMENTS",
                    align: "left",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                }
                
            ],
            headers3: [{
                text: "4.1 Please indicate the number of DBE-provided workbooks and CAPS aligned text books that the school requires(shortages).",
                align: "left",
                sortable: false,
                value: ""
                //   width: "10%"
            }],
            headers5: [{
                





                    text: "LEVEL",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "POST LEVEL 1",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "HOD",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "DEPUTY",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "PRINCIPAL",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "TOTAL",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                }
            ],

            headers6: [{
                text: "2.2 Please list the available vacancies (by level) per subject and grade.",
                align: "left",
                sortable: false,
                value: ""
                //   width: "10%"
            }],

            headers7: [{
                    text: "LEVEL VACANT (e.g. HOD)",
                    align: "center",
                    sortable: false,
                    value: "",
                    width: "230px"
                },
                {
                    text: "SUBJECT(S) (Accounting Economics)",
                    align: "center",
                    sortable: false,
                    value: "",
                    width: "180px"
                },
                {
                    text: "GRADE (10-12)",
                    align: "center",
                    sortable: false,
                    value: "",
                    width: "150px"
                },
                {
                    text: "ACTION",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                }
            ],

            headers4: [{
                    text: "Books",
                    align: "center",
                    sortable: false,
                    value: "",
                    
                },
                {
                    text: "Gr. R",
                    align: "center",
                    sortable: false,
                    value: "",
                    
                },
                {
                    text: "Gr.1-3",
                    align: "center",
                    sortable: false,
                    value: "",
                    
                },
                {
                    text: "Gr. 4",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "Gr. 5",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "Gr. 6",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "Gr. 10",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "Gr. 11",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "Gr. 12",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                }
            ],
            headers8: [{
                    text: "QUESTIONS",
                    align: "left",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                
                {
                    text: "FINDINGS",
                    align: "left",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                }
                
            ],
            headers9: [{
                    text: "QUESTIONS",
                    align: "left",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                
                {
                    text: "",
                    align: "left",
                    sortable: false,
                    value: "",
                    width: "250px"
                },
                
                {
                    text: "FINDINGS",
                    align: "left",
                    sortable: false,
                    value: ""
                }
            ],
            headers10: [{
                    text: "Gr. 1",
                    align: "center",
                    sortable: false,
                    value: "",
                    
                },
                {
                    text: "Gr.2",
                    align: "center",
                    sortable: false,
                    value: "",
                    
                },
                {
                    text: "Gr. 3",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "Gr. 4",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "Gr. 5",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "Gr. 6",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "Gr. 7",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "Gr. 8",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "Gr. 9",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "Gr. 10",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "Gr. 11",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "Gr. 12",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                }],

            headers: [{
                    text: "QUESTIONS",
                    align: "left",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                
                {
                    text: "FINDINGS",
                    align: "left",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                
                {
                    text: "EVIDENCE",
                    align: "left",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                }
            ],
            headers11: [{
                    text: "HARBOUR, AIRPORT OR PORT OF ENTRY AND DATE OF ARRIVAL",
                    align: "left",
                    sortable: false,
                    value: "",
                    width: "10%"
                },
                {
                    text: "COUNTRY FROM WHICH EMIGRITED",
                    align: "center",
                    sortable: false,
                    value: "",
                    maxWidth: "180px"
                },
                {
                    text: "DATE AND NUMBER OF IMMIGRATION PERMIT",
                    align: "center",
                    sortable: false,
                    value: "",
                    width: "150px"
                }
            ],
            headers12: [{
                    text: "IF NATURALISED, STATE",
                    align: "center",
                    sortable: false,
                    value: "",
                    width: "230px"
                },
                {
                    text: "DATE: ",
                    align: "center",
                    sortable: false,
                    value: "",
                    width: "180px"
                },
                {
                    text: "CERTIFICATE No: ",
                    align: "center",
                    sortable: false,
                    value: "",
                    width: "150px"
                }
                // {
                //   text: "FULL RESIDENTIAL ADDRESS",
                //   align: "center",
                //   sortable: false,
                //   value: ""
                //   //   width: "10%"
                // }
            ],

            headers13: [{
                    text: "4.22 Please provide the Matric/National Senior Certificate pass rate for the past 3 years (including the target for the current year).",
                    align: "left",
                    sortable: false,
                    value: "",
                    width: "230px"
                }
            ],
            headers14: [{
                text: "-",
                align: "center",
                sortable: false,
                value: ""
                //   width: "10%"
            },
            {
                text: "2014",
                align: "center",
                sortable: false,
                value: ""
                //   width: "10%"
            },
            {
                text: "2015",
                align: "center",
                sortable: false,
                value: ""
                //   width: "10%"
            },
            {
                text: "2016",
                align: "center",
                sortable: false,
                value: ""
                //   width: "10%"
            }],
            headers16: [
                {
                    text: "6.2 How many learners arrived at school on the first day? Information should be verified.",
                    align: "left",
                    sortable: false,
                    value: "",
                    width: "230px"
                }
            ],

            headers17: [{
                    text: "DATE",
                    align: "center",
                    sortable: false,
                    value: ""
                },
                {
                    text: "NAME OF SERVICE",
                    align: "center",
                    sortable: false,
                    value: ""
                },
                {
                    text: "NAME OF CONTACT",
                    align: "center",
                    sortable: false,
                    value: ""
                },
                // {
                //   text: "DATE TO",
                //   align: "center",
                //   sortable: false,
                //   value: ""
                //   //   width: "10%"
                // },
                {
                    text: "ACTIONS",
                    sortable: false,
                    value: "carbs"
                }
            ],
            headers18: [{
                text: "6.3 How many learners droppedout of school in the previous school year?",
                align: "left",
                sortable: false,
                value: ""
                //   width: "10%"
            }],
            headers19: [{
                    text: "PLACE",
                    align: "center",
                    sortable: false,
                    value: ""
                },
                {
                    text: "DATE",
                    align: "center",
                    sortable: false,
                    value: ""
                },
                {
                    text: "NATURE OF CASE/CHARGE",
                    align: "center",
                    sortable: false,
                    value: ""
                },
                {
                    text: "FINDING",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "ACTIONS",
                    sortable: false,
                    value: "carbs"
                }
            ],
            headers20: [{
                text: "IF YOU HAVE EVER HAD A SUMMONS SERVED ON YOU FOR DEBT, STATE THE FOLLOWING",
                align: "center",
                sortable: false,
                value: ""
                //   width: "10%"
            }],
            headers21: [{
                    text: "PLACE",
                    align: "center",
                    sortable: false,
                    value: ""
                },
                {
                    text: "DATE",
                    align: "center",
                    sortable: false,
                    value: ""
                },
                {
                    text: "BY  WHOM",
                    align: "center",
                    sortable: false,
                    value: ""
                },
                {
                    text: "FINDING",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "ACTIONS",
                    sortable: false,
                    value: "carbs"
                }
            ],
            headers22: [{
                    text: "PLACE",
                    align: "center",
                    sortable: false,
                    value: ""
                },
                {
                    text: "DATE",
                    align: "center",
                    sortable: false,
                    value: ""
                },
                {
                    text: "NAME OF COMPANY/CLOSE CORPORATION",
                    align: "center",
                    sortable: false,
                    value: ""
                },
                // {
                //   text: "DATE TO",
                //   align: "center",
                //   sortable: false,
                //   value: ""
                //   //   width: "10%"
                // },
                {
                    text: "ACTIONS",
                    sortable: false,
                    value: "carbs"
                }
            ],
            headers23: [{
                    text: "DESIGNATION (RANK) AND SERVICE NUMBER",
                    align: "center",
                    sortable: false,
                    value: ""
                },
                {
                    text: "NAME OF EMPLOYER",
                    align: "center",
                    sortable: false,
                    value: ""
                },
                {
                    text: "SUPERVISOR NAME",
                    align: "center",
                    sortable: false,
                    value: ""
                },
                {
                    text: "SUPERVISOR TEL. No.",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "PHYSICAL ADDRESS",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "ACTIONS",
                    sortable: false,
                    value: "scarbs"
                }
            ],
            headers24: [{
                    text: "TITLE",
                    align: "center",
                    sortable: false,
                    value: ""
                },
                {
                    text: "SURNAME",
                    align: "center",
                    sortable: false,
                    value: ""
                },
                {
                    text: "FULL FIRST NAMES",
                    align: "center",
                    sortable: false,
                    value: ""
                },
                {
                    text: "RESIDENTIAL ADDRESS(NOT POSTAL ADDRESS)",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "HOME TEL. No.(DIALING CODE)",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "OCCUPATIONAL AND BUSINESS ADDRESS(NOT POSTAL ADDRESS)",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "BUS. TEL. No.(DIALING CODE)",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "YEARS KNOWN",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "IDENTITY No.",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "ACTIONS",
                    sortable: false,
                    value: "scarbs"
                }
            ],

            headers25: [{
                    text: "COUNTRY",
                    align: "center",
                    sortable: false,
                    value: ""
                },
                {
                    text: "SERVICE NUMBER",
                    align: "center",
                    sortable: false,
                    value: ""
                },
                {
                    text: "FROM",
                    align: "center",
                    sortable: false,
                    value: ""
                },
                {
                    text: "TO",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "NAME OF SERVICE",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "ACTIONS",
                    sortable: false,
                    value: "scarbs"
                }
            ],
            headers26: [{
                    text: "LEVEL",
                    align: "center",
                    sortable: false,
                    value: ""
                },
                {
                    text: "DATE ISSUED/DENIED",
                    align: "center",
                    sortable: false,
                    value: ""
                },
                {
                    text: "INSTITUTION",
                    align: "center",
                    sortable: false,
                    value: ""
                },
                {
                    text: "ACTIONS",
                    sortable: false,
                    value: "scarbs"
                }
            ],
            headers27: [{
                    text: "-",
                    align: "center",
                    sortable: false,
                    value: ""
            }],
            headers28: [{
                    text: "Gr.R",
                    align: "center",
                    sortable: false,
                    value: ""
            },
            {
                    text: "Gr.1",
                    align: "center",
                    sortable: false,
                    value: ""
            },
            {
                    text: "Gr.2",
                    align: "center",
                    sortable: false,
                    value: ""
            },
            {
                    text: "Gr.3",
                    align: "center",
                    sortable: false,
                    value: ""
            },
            {
                    text: "Gr.4",
                    align: "center",
                    sortable: false,
                    value: ""
            },
            {
                    text: "Gr.5",
                    align: "center",
                    sortable: false,
                    value: ""
            },
            {
                    text: "Gr.6",
                    align: "center",
                    sortable: false,
                    value: ""
            },
            {
                    text: "Gr.7",
                    align: "center",
                    sortable: false,
                    value: ""
            },
            {
                    text: "Gr.8",
                    align: "center",
                    sortable: false,
                    value: ""
            },
            {
                    text: "Gr.9",
                    align: "center",
                    sortable: false,
                    value: ""
            },
            {
                    text: "Gr.10",
                    align: "center",
                    sortable: false,
                    value: ""
            },
            {
                    text: "Gr.11",
                    align: "center",
                    sortable: false,
                    value: ""
            },
            {
                    text: "Gr.12",
                    align: "center",
                    sortable: false,
                    value: ""
            }],
            
            
            iSign: false,
            doc: {
                ref: this.$route.params.ref,
                template: "checklist",
                author: store.state.user,
                formValid: true,
                docRef: Math.round(+new Date() / 1000),
                body: {
                    address: "",
                    date1: new Date().toISOString().substr(0, 10),
                    date2: new Date().toISOString().substr(0, 10),
                    date3: new Date().toISOString().substr(0, 10),
                    date4: new Date().toISOString().substr(0, 10),
                    enderUser: {},
                    initialsSurname: "",
                    items: ['Not effective', 'Effective', 'Very effective'],
                    items1: ['Ordinary', 'Special', 'Full-service'],
                    items2: ['Foundation', 'Intermediate', 'Senior', 'FET'],

                    phase1: [{
                            description: " IDENTITY No.",
                            comment: ""
                        },
                        {
                            description: "SURNAME",
                            comment: ""
                        },
                        {
                            description: "FULL FIRST NAMES",
                            comment: "",
                            fullname: "FULL_FIRST_NAMES"
                        },
                        {
                            description: "PRESENT",
                            comment: ""
                        },
                        {
                            description: "PREVIOUS",
                            comment: ""
                        },
                        {
                            description: "HOME ADDRESS",
                            comment: ""
                        },
                        {
                            description: "TEL. HOME",
                            comment: ""
                        },
                        {
                            description: "TEL. WORK",
                            comment: ""
                        }
                    ],

                    phase2: [{
                        description: "HAVE YOU EVER UNDERGONE PSYCHIATRIC TREATMENT AND/OR PSYCHOLOGICAL THERAPY?",
                        boolean: "",
                        comment: ""
                    }],

                    phase3: [{
                        description: "Invite 5 quotations, preferably between 3 and 7 days depending on the type and urgency of service/commodity required.  Attach proof of invitation.",
                        boolean: "",
                        comment: ""
                    }],
                    phase4: [{
                            description: "Grade R workbook",
                            boolean: "",
                            comment: ""
                        },
                        {
                            description: "Gr.1-3 Graded Readers (10 packs)",
                            boolean: "",
                            comment: ""
                        },
                        {
                            description: "Gr. 1-3 Basic Books (2 packs)",
                            boolean: "",
                            comment: ""
                        },
                        {
                            description: "Gr. 1-3 Phonics (2 packs)",
                            boolean: "",
                            comment: ""
                        },
                        {
                            description: "Natural Sciences workbook",
                            boolean: "",
                            comment: ""
                        },
                        {
                            description: "Life Skills",
                            boolean: "",
                            comment: ""
                        },
                        {
                            description: "Mathematics/Numeracy",
                            boolean: "",
                            comment: ""
                        },
                        {
                            description: "English FAL",
                            boolean: "",
                            comment: ""
                        },
                        {
                            description: "Home Language",
                            boolean: "",
                            comment: ""
                        },
                        {
                            description: "Physical Sciences",
                            boolean: "",
                            comment: ""
                        },
                        {
                            description: "Life Sciences",
                            boolean: "",
                            comment: ""
                        },
                        {
                            description: "Mathematics Literacy",
                            boolean: "",
                            comment: ""
                        },
                        {
                            description: "Accounting Mind the Gap Study Guide",
                            boolean: "",
                            comment: ""
                        },
                        {
                            description: "Geography Mind the Gap Study Guide",
                            boolean: "",
                            comment: ""
                        },
                        {
                            description: "Economics Mind the Gap Study Guide",
                            boolean: "",
                            comment: ""
                        },
                        {
                            description: "Life Sciences Mind the Gap Study Guide",
                            boolean: "",
                            comment: ""
                        }
                    ],

                    phase5: [{
                            description: "Post establishment (expected)",
                            boolean: "",
                            comment: ""
                        },
                        {
                            description: "Staff establishment (actual)",
                            boolean: "",
                            comment: ""
                        },
                        {
                            description: "Temporary",
                            boolean: "",
                            comment: ""
                        },
                        {
                            description: "SGB Employed",
                            boolean: "",
                            comment: ""
                        },
                        {
                            description: "Excess educators",
                            boolean: "",
                            comment: ""
                        }
                    ],

                    phase6: [{
                            description: "(i)",
                            boolean: "",
                            comment: ""
                        },
                        {
                            description: "(ii)",
                            boolean: "",
                            comment: ""
                        },
                        {
                            description: "(iii)",
                            boolean: "",
                            comment: ""
                        }
                    ],
                    phase7: [{
                        description: "4.6 What was the overall Grade1 performance of the school in the 2013 ANA?",
                        description1: "Language (%)",
                        comment: "",
                        description2: "Maths (%)",
                    },
                    {
                        description: "4.7 Realistically, what do you expect the pass rate to be in the 2014 Grade1 ANA?",
                        description1: "Language (%)",
                        comment: "",
                        description2: "Maths (%)",
                    },
                    {
                        description: "4.8 What was the overall Grade2 performance of the school in the 2013 ANA?",
                        description1: "Language (%)",
                        comment: "",
                        description2: "Maths (%)",
                    },
                    {
                        description: "4.9 Realistically, what do you expect the pass rate to be in the 2014 Grade2 ANA?",
                        description1: "Language (%)",
                        comment: "",
                        description2: "Maths (%)",
                    },
                    {
                        description: "4.10 What was the overall Grade 3 performance of the school in the 2013 ANA?",
                        description1: "Language (%)",
                        comment: "",
                        description2: "Maths (%)",
                    },
                    {
                        description: "4.11 Realistically, what do you expect the pass rate to be in the 2014 Grade 3 ANA?",
                        description1: "Language (%)",
                        comment: "",
                        description2: "Maths (%)",
                    },
                    {
                        description: "4.12 What was the overall Grade 4 performance of the school in the 2013 ANA?",
                        description1: "Language (%)",
                        comment: "",
                        description2: "Maths (%)",
                    },
                    {
                        description: "4.13 Realistically, what do you expect the pass rate to be in the 2014 Grade 4 ANA?",
                        description1: "Language (%)",
                        comment: "",
                        description2: "Maths (%)",
                    },
                    {
                        description: "4.14 What was the overall Grade 5 performance of the school in the 2013 ANA?",
                        description1: "Language (%)",
                        comment: "",
                        description2: "Maths (%)",
                    },
                    {
                        description: "4.15 Realistically, what do you expect the pass rate to be in the 2014 Grade 5 ANA?",
                        description1: "Language (%)",
                        comment: "",
                        description2: "Maths (%)",
                    },
                    {
                        description: "4.16 What was the overall Grade 6 performance of the school in the 2013 ANA?",
                        description1: "Language (%)",
                        comment: "",
                        description2: "Maths (%)",
                    },
                    {
                        description: "4.17 Realistically, what do you expect the pass rate to be in the 2014 Grade 6 ANA?",
                        description1: "Language (%)",
                        comment: "",
                        description2: "Maths (%)",
                    },
                    {
                        description: "4.18 What was the overall Grade 9 performance of the school in the 2013 ANA?",
                        description1: "Language (%)",
                        comment: "",
                        description2: "Maths (%)",
                    },
                    {
                        description: "4.19 Realistically, what do you expect the pass rate to be in the 2014 Grade 9 ANA?",
                        description1: "Language (%)",
                        comment: "",
                        description2: "Maths (%)",
                    }],
                    phase8: [{

                        description: "4.5 Does the school havea school improvement plan?",
                        boolean: ""
                    }],
                    phase9: [{

                        description: "5.2 Does the school have a functional School-Based Support Team to identify and support learners with barriers to learning?",
                        description1: "",
                        boolean: ""

                    },
                    {

                        description: "5.3 Does the school have a functional District-Based Support Team to identify and support learners with barriers to learning?",
                        description1: "",
                        boolean: ""

                    },
                    {

                        description: "5.4 Does the school have facilities to accommodate learners with special needs?",
                        description1: ["","Ramps","Special classes","Specialised educators"],
                        boolean: [],

                    },
                    {

                        description: "5.5 Does the school have a state-funded feeding programme (National School Nutrition Programme)?",
                        description1: "",
                        boolean: ""

                    },
                    {

                        description: "5.6 Is scholar transport provided for learners?",
                        description1: "",
                        boolean: ""

                    }],
                    phase10: [{
                        comment: ""
                    }],
                    phase11: [{
                        comment: ""
                    }],
                    phase14: [{
                        description: "Actual Pass Rate",
                        boolean: "",
                        comment: ""
                    },
                    {
                        description: "Target",
                        boolean: "",
                        comment: ""
                    }],
                    phase15: [{
                        description: "Expected Number",
                        boolean: "",
                        comment: ""
                    },
                    {
                        description: "Actual Number",
                        boolean: "",
                        comment: ""
                    },
                    {
                        description: "Vacancies",
                        boolean: "",
                        comment: ""
                    }],
                    phase16: [{
                        description: "4.2 Is there a text book retrieval system at the school?",
                        boolean: "",
                        comment: ""
                    },
                    {
                        description: "4.3 Is there a textbook retrieval register? Please provide evidence.",
                        boolean: "",
                        comment: ""
                    }],
                     phase: [{
                        description: "4.20 Has the school done an itemised analysis of the ANA results? Please provide evidence",
                        boolean: "",
                        comment: ""
                    },
                    {
                        description: "4.21 Has the school developed an intervention plan? Please provide evidence.",
                        boolean: "",
                        comment: ""
                    }],
                    
                    phase20: [{
                        description: "HAVE YOU EVER BEEN CONVICTED OR ARE THERE ANY PENDING CASES FOR A CRIMINAL/ DEPARTMENTAL OFFENCE(S)? ( ADMISSION OF GUILT OUTSIDE A COURT MUST ALSO BE SUBMITTED )",
                        boolean: "",
                        comment: ""
                    }],
                    phase21: [{
                        description: "5.1 What is the type of school?",
                        boolean: "",
                        comment: ""
                    }],
                    phase22: [{
                        description: "6.1 How many teachers have reported for duty on the first day of school? Information should be verified.",
                        boolean: "",
                        comment: ""
                    }],
                    phase23: [{
                        description: "4.4 Rate the effectiveness of the textbook retrieval system (It should be noted that there is always a loss of textbooks)",
                        boolean: "",
                        comment: ""
                    }],
                     phase24: [{
                        description: "6.3.1 What is the main reason for learners dropping out?",
                        boolean: "",
                        comment: ""
                    }
                    ],
                     phase25: [{
                        description: "6.4 When did the school governing body last meet?Insert date based on evidence of minutes, agenda, etc.",
                        boolean: "",
                        comment: ""
                    }],
                     phase26: [{
                        description: "6.6 If there are vacancies, when is the expected date of by-elections?",
                        boolean: "",
                        comment: ""
                    }],
                     phase27: [{
                        description: "",
                        boolean: "",
                        comment: ""
                    },
                    {
                        description: "",
                        boolean: "",
                        comment: ""
                    }],
                    phase28: [{
                        description: "Name of the School",
                        boolean: "",
                        comment: ""
                    },
                    {
                        description: "EMIS Number",
                        boolean: "",
                        comment: ""
                    },
                    {
                        description: "Province Name",
                        boolean: "",
                        comment: ""
                    },
                    {
                        description: "District Name",
                        boolean: "",
                        comment: ""
                    },
                    {
                        description: "Circuit Name",
                        boolean: "",
                        comment: ""
                    },
                    {
                        description: "Type of school",
                        boolean: "",
                        comment: ""
                    },
                    {
                        description: "Principal’s Name",
                        boolean: "",
                        comment: ""
                    },
                    {
                        description: "Tel Number",
                        boolean: "",
                        comment: ""
                    },
                    {
                        description: "Facsimile Number",
                        boolean: "",
                        comment: ""
                    },
                    {
                        description: "Cell Number",
                        boolean: "",
                        comment: ""
                    },
                    {
                        description: "Email Address",
                        boolean: "",
                        comment: ""
                    },
                    {
                        description: "Postal Address",
                        boolean: "",
                        comment: ""
                    },
                    {
                        description: "Quintile",
                        boolean: "",
                        comment: ""
                    },
                    {
                        description: "Section 20?",
                        boolean: "",
                        comment: ""
                    },
                    {
                        description: "Language of Learning and Teaching for Grades 1-3",
                        boolean: "",
                        comment: ""
                    },
                    {
                        description: "Language of Learning and Teaching for Grades 4-12",
                        boolean: "",
                        comment: ""
                    }],
                     phase29: [{
                        description: "How many multi-grade classes are there in your school by phase?",
                        boolean: "",
                        comment: ""
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
            plugins: "fullscreen print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern help",
            toolbar: "fullscreen | basicDateButton | formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat"
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

.heading-bg{
    background-color:#dddddd;
    padding-left: 3%;
}

.main-heading {
    border: 2px solid #dddddd;
    padding: 5%;
    border-radius: 5px;
}
.black-block{
    background-color:#ddd;
    height:80px;
    border: 2px solid #fff;
    
}
.array-padding {
    /* padding: 0px 10px; */
    /* border: 2px solid #dddddd; */
    margin-bottom: 53px;
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
.styled-description{
     min-width: 90px;
}
</style>
