export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      { //1
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },

      //2
      {
        path: 'forms',
        data: {
          menu: {
            title: 'Insert Items',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'shortTermItemInsert',
            data: {
              menu: {
                title: 'Short Term Item Insert',
              }
            }
          },
          {
            path: 'middleTermItemInsert',
            data: {
              menu: {
                title: 'Middle Term Item Insert',
              }
            }
          },
          {
            path: 'longTermItemInsert',
            data: {
              menu: {
                title: 'Long Term Item Insert',
              }
            }
          }

        ]
      },
      //3
      {
        path: 'item-updating',
        data: {
          menu: {
            title: 'Update Item',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'longtermupdate',
            data: {
              menu: {
                title: 'Long Term Item Update',
              }
            }
          },
          {
            path: 'middletermupdate',
            data: {
              menu: {
                title: 'Middle Term Item Update',
              }
            }
          },
          {
            path: 'shorttermupdate',
            data: {
              menu: {
                title: 'Short Term Item Update',
              }
            }
          }
        ]
      },
      //4 
      {
        path: 'item-deletion',
        data: {
          menu: {
            title: 'Delete Item',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'longtermdeletion',
            data: {
              menu: {
                title: 'Long Term Item Deletion',
              }
            }
          },
          {
            path: 'middletermdeletion',
            data: {
              menu: {
                title: 'Middle Term Item Deletion',
              }
            }
          },
          {
            path: 'shorttermdeletion',
            data: {
              menu: {
                title: 'Short Term Item Deletion',
              }
            }
          }
        ]
      },


      // 5

      {
        path: 'item-available',
        data: {
          menu: {
            title: 'Availability of Items',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'showavailables',
            data: {
              menu: {
                title: 'Available Items',
              }
            }
          },
          {
            path: 'showmoreavailables',
            data: {
              menu: {
                title: 'Available Items Details',
              }
            }
          },
          {
            path: 'showallocations',
            data: {
              menu: {
                title: 'Allocated Items',
              }
            }
          },
          {
            path: 'showlastreturns',
            data: {
              menu: {
                title: 'Return History',
              }
            }
          }


        ]
      },

      //6
      {
        path: 'item-allocation',
        data: {
          menu: {
            title: 'Item Allocation',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'allocation',
            data: {
              menu: {
                title: 'Allocate Item',
              }
            }
          },
                   
        ]
      },
      //7
      {
        path: 'item-return',
        data: {
          menu: {
            title: 'Returns Items',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'itemreturn',
            data: {
              menu: {
                title: 'Return Item',
              }
            }
          }


        ]
      },
      //8

      {
        path: 'request-report',
        data: {
          menu: {
            title: 'Request/Report Item',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'reportItem',
            data: {
              menu: {
                title: 'Report Item',
              }
            }
          },
          {
            path: 'requestExistingItem',
            data: {
              menu: {
                title: 'Request Existing Item',
              }
            }
          },
          {
            path: 'requestNewItem',
            data: {
              menu: {
                title: 'Request New Item',
              }
            }
          },
          {
            path: 'view',
            data: {
              menu: {
                title: 'View Request',
              }
            }
          }
        ]
      },


      //9      
      {
        path: 'set-notification',
        data: {
          menu: {
            title: 'Set Notifications',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'setmiddlenotification',
            data: {
              menu: {
                title: 'Set Notification',
              }
            }
          }
        ]
      },

      //10

      {
        path: 'supplier',
        data: {
          menu: {
            title: 'Supplier Detail',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'supplierdetail',
            data: {
              menu: {
                title: 'Supplier Insert',

              }
            }
          },
          {
            path: 'supplierdetailupdate',
            data: {
              menu: {
                title: 'Supplier Update',
              }
            }
          },
          {
            path: 'supplierdetaildeletion',
            data: {
              menu: {
                title: 'Supplier Delete',
              }
            }
          }

        ]
      },

      {
        path: 'forms',
        data: {
          menu: {
            title: 'Authorization',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'setRole',
            data: {
              menu: {
                title: 'Set UserRole',
              }
            }
          },
          {
            path: 'resetAccount',
            data: {
              menu: {
                title: 'Reset Account',
              }
            }
          },   

        ]
      },

    ]
  }
];
 