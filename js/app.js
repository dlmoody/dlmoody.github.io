/**
 * Created by David Moody on 2/7/15.
 */

var app = angular.Module("Portfolio", []);


app.controller("TabCtrl", function($scope){
    $scope.tab = 'info';

    $scope.isActive = function(tabName){
        return $scope.tab === tabName;
    },

    $scope.resume =  {
        canidate: {
            firstName: 'David',
            lastName: 'Moody',
            middleInitial: 'L',
            suffix: 'Jr',
            email: 'moody.david@gmail.com',
            phone: '804 389 5540',
            address: {
                lines: ['107 Pine Haven Rd', ''],
                city: 'Aylett',
                state: 'VA',
                zip: '23009'
            }
        },
        summary: 'I have been working in the IT field as a software developer and architect since the late 90’s. I cut my teeth writing excel macros that interacted with Thompson Finacial green screens for brokerages, and the love affair began... I Love to learn, use and explore new technologies and new ways of doing things.',
        skills:[
            {title:'ASP.NET', level:96},
            {title:'C#', level:95},
            {title:'SQL Server/T-SQL', level:80},
            {title:'Entity Framework', level:80},
            {title:'Oracle/PL-SQL', level:50},
            {title:'Classic ASP', level:60},
            {title:'Javascript', level:95},
            {title:'JQuery', level:80},
            {title:'MVC 4', level:80},
            {title:'Web Forms', level:60},
            {title:'AJAX', level:80},
            {title:'PowerShell Scripting', level:20}

        ],
        experiences:[
            {
                company:'Owens and Minor',
                logo:'http://www.owens-minor.com/Style%20Library/Images/om_logo.gif',
                startDate: 'April 2012',
                endDate: 'Present',
                blurbs:[
                    {
                        header:'Senior .NET Developer',
                        description: '',
                        points:[]
                    },
                    {
                        header:'Document Repository',
                        description: 'This application was Designed to be a repository for all applications via its Web API. The document Repository allowed application to store, and retrieve documents of any type allowed, Applications could also store meta data about the documents which could be used for searching and discovery of documents',
                        points:[
                            {text:'I Designed and built a Database for a Document Repository with full text search capability. The database stores meta data dynamically with pointer to the physical files that are located on disk.'},
                            {text:'I Designed and built an MVC Web API to serve out files. Metadata is served out as JSON. this App uses Entity Framework to connect with the database. Full Text searches are done using ADO.NET and Stored Procedures.'},
                            {text:'This application uses a WCF Service to access data from the database tier.'},
                            {text:'Heavy use of Ninject for Inversion of Control'}
                        ]
                    },
                    {
                        header:'Technologies',
                        description: '',
                        points:[
                            {text:'MVC 4'},
                            {text:'Entity Framework'},
                            {text:'Web API'},
                            {text:'WCF Services'}
                        ]
                    },
                    {
                        header:'OM Vision',
                        description: 'Designed and built a Youtube like web application that interfaced with the Document repository to allow users with the correct privileges to upload videos with meta data for internal consumption by Owens and Minor Employees. a seperate database was built to hold information on views, view statistics, required videos (user must see the video) and view later lists for users',
                        points:[
                            {text:'Heavy use of JQuery, Bootstrap and asynchronous Ajax calls.'},
                            {text:'Designed and built a WCF service that uses Entity Framework to be called by the Video Web Application to interface with the database.'},
                            {text:'Designed and built a WCF service that converted videos to mp4 from many other formats. This service included methods that could be called to get updates on the status of the conversion.'},
                            {text:'Active Directory LDAP is used for user authorization'},
                            {text:'Heavy use of Ninject for Inversion of Control'}
                        ]
                    },
                    {
                        header:'Technologies',
                        description: '',
                        points:[
                            {text:'MVC 4'},
                            {text:'Entity Framework'},
                            {text:'Bootstrap'},
                            {text:'JQuery'},
                            {text:'Web API'},
                            {text:'WCF Services'}
                        ]
                    },
                    {
                        header:'QSight',
                        description: 'Complete redesign on the front end of an ASP.NET WebForms/Classic ASP application that is used in hospitals to order and track invintories of medical supplies',
                        points:[
                            {text:'Redesign towards more use of asynchronous Ajax calls to GET and POST data instead of full page POST backs were it made sence and the user experience would be inhanced.'},
                            {text:'Converted entire front end to custom Bootstrap theme.'},
                            {text:'Cleaned up Javascript on paged to use JQuery were it made sence and would improve maintainability'},
                            {text:'Refactored ASP Classic were needed. example: Moving smaller units of work out to improve usability'}
                        ]
                    }
                ]
            },
            {
                company: 'ACS Xerox',
                logo:'http://theruniagallery.com/img/logo_xerox.jpeg',
                startDate: 'July 2011',
                endDate: 'April 2012',
                blurbs:[
                    {
                        header:'Senior .NET Developer',
                        description: '',
                        points:[]
                    },
                    {
                        header:'SmartRx',
                        description: 'Architect, Design and implement application that allows doctors and approved medical workers to create and electronically send prescriptions to participating pharmacies over the internet.',
                        points:[
                            {text:'This application is integrated with in-house web services.'},
                            {text:'This allows for patient lookups, drug formulary searches, drug interactions and complex business rules based on the needs of the  client.'},
                            {text:'The application was built as an ASP.NET C# web application with extensive use of WCF using TCP/IP for SQL Server back end connectivity, heavy use of JQuery, XML and AJAX'},
                            {text:'Heavy use of Ninject for Inversion of Control'}
                        ]
                    },
                ]
            },
            {
                company: 'Davenport & Co',
                logo:'',
                startDate: 'April 2010',
                endDate: 'July 2011',
                blurbs:[
                    {
                        header:'Lead/Architect .NET Developer',
                        description: '',
                        points:[]
                    },
                    {
                        header:'Primary Responsibilities',
                        description: 'I was responsible for making sure that our in-house applications and ETL processes were up and running',
                        points:[
                            {text:'In addition I worked to design an upgrade our Thompson Financial ETL, from DTS Packages to SSIS Packages.'},
                            {text:'Created Reports for the business that used Stored procedures for Data Retrieval and Excel Spreadsheet pivot tables for the presentation.'},
                            {text:'Maintained all of the in-house Classic ASP applications as well as ASP.NET applications.'}
                        ]
                    },
                ]
            },
        ]
    };
})