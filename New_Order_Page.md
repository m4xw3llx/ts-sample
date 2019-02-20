
# Table of Contents

1.  [Web Targets](#org2b8977b)
    1.  [Editable Cell](#orgbf06596)
    2.  [Address Geocoding](#org090e30a)
    3.  [Distance Calculate](#org445d164)
2.  [Mobile Targets](#orge5f0992)
    1.  [HomePage - Back Button](#org8f51529)
    2.  [HomePage - Begin Button](#orgf316047)
    3.  [New cost page.](#org445d764)
    4.  [New money cost API.](#org081171f)
        1.  [API](#org691e9a6)
    5.  [HomePage - Car Display](#orge3d0fde)
    6.  [Order Page - Pay success](#orgb1f63d7)
        1.  [Driver Navigation](#orgcc35981)
        2.  [Charge Success](#org11fddd9)
        3.  [Balance Refresh](#orgfd0b375)



<a id="org2b8977b"></a>

# Web Targets


<a id="orgbf06596"></a>

## TODO Editable Cell


<a id="org090e30a"></a>

## TODO Address Geocoding


<a id="org445d164"></a>

## TODO Distance Calculate


<a id="orge5f0992"></a>

# Mobile Targets


<a id="org8f51529"></a>

## DONE HomePage - Back Button

Remove the button at homepage which used for go back to user location.


<a id="orgf316047"></a>

## DONE HomePage - Begin Button

The "begin shipment" button should display when receiver address has been choose.


<a id="org445d764"></a>

## DONE New cost page.


<a id="org081171f"></a>

## DONE New money cost API.


<a id="org691e9a6"></a>

### API

1.  POST 单个运单计价  {{host}}/api/wallet/price/order/calculate

        {
            "todayPriceRuleId": 7,
            "immediatePriceRuleId": 8,
            "sLat": 39.989643,
            "sLng": 116.481028,
            "expressId": "5a53e",
            "rLat": 39.989643,
            "rLng": 116.491038,
            "unit": 3,
            "recycle": true,
            "totalPart": 5
        }
    
        {
            "code": "1",
            "msg": "成功",
            "data": [
                {
                    "priceId": "5c6b688b7c45a87922d01dfe",
                    "expressId": "5a53e",
                    "createTime": "2019-02-19T10:23:07.843+0800",
                    "total": 30.74,
                    "base": {
                        "basePrice": 15,
                        "total": 15
                    },
                    "mileage": {
                        "mileagePrice": 2,
                        "mileage": 2.06,
                        "total": 4.12
                    },
                    "unit": {
                        "unitPrice": 2.5,
                        "unit": 3,
                        "total": 7.5
                    },
                    "priority": {
                        "Total": 0
                    },
                    "recycle": {
                        "mileagePrice": 2,
                        "mileage": 2.06,
                        "total": 4.12
                    },
                    "cod": {
                        "cod": 0,
                        "scale": 0.001,
                        "fee": 0,
                        "total": 0
                    }
                },
                {
                    "priceId": "5c6b688b7c45a87922d01dff",
                    "expressId": "5a53e",
                    "createTime": "2019-02-19T10:23:07.878+0800",
                    "total": 33.83,
                    "base": {
                        "basePrice": 15,
                        "total": 15
                    },
                    "mileage": {
                        "mileagePrice": 2,
                        "mileage": 2.06,
                        "total": 4.12
                    },
                    "unit": {
                        "unitPrice": 2.5,
                        "unit": 3,
                        "total": 7.5
                    },
                    "priority": {
                        "total": 3.09
                    },
                    "recycle": {
                        "mileagePrice": 2,
                        "mileage": 2.06,
                        "total": 4.12
                    },
                    "cod": {
                        "cod": 0,
                        "scale": 0.001,
                        "fee": 0,
                        "total": 0
                    }
                },
                {
                    "priceId": "5c6b688b7c45a87922d01e00",
                    "expressId": "5a53e",
                    "createTime": "2019-02-19T10:23:07.881+0800",
                    "total": 36.92,
                    "base": {
                        "basePrice": 15,
                        "total": 15
                    },
                    "mileage": {
                        "mileagePrice": 2,
                        "mileage": 2.06,
                        "total": 4.12
                    },
                    "unit": {
                        "unitPrice": 2.5,
                        "unit": 3,
                        "total": 7.5
                    },
                    "priority": {
                        "total": 6.18
                    },
                    "recycle": {
                        "mileagePrice": 2,
                        "mileage": 2.06,
                        "total": 4.12
                    },
                    "cod": {
                        "cod": 0,
                        "scale": 0.001,
                        "fee": 0,
                        "total": 0
                    }
                },
                {
                    "priceId": "5c6b688b7c45a87922d01e01",
                    "expressId": "5a53e",
                    "createTime": "2019-02-19T10:23:07.885+0800",
                    "total": 40.01,
                    "base": {
                        "basePrice": 15,
                        "total": 15
                    },
                    "mileage": {
                        "mileagePrice": 2,
                        "mileage": 2.06,
                        "total": 4.12
                    },
                    "unit": {
                        "unitPrice": 2.5,
                        "unit": 3,
                        "total": 7.5
                    },
                    "priority": {
                        "total": 9.27
                    },
                    "recycle": {
                        "mileagePrice": 2,
                        "mileage": 2.06,
                        "total": 4.12
                    },
                    "cod": {
                        "cod": 0,
                        "scale": 0.001,
                        "fee": 0,
                        "total": 0
                    }
                },
                {
                    "priceId": "5c6b688b7c45a87922d01e02",
                    "expressId": "5a53e",
                    "createTime": "2019-02-19T10:23:07.888+0800",
                    "total": 43.1,
                    "base": {
                        "basePrice": 15,
                        "total": 15
                    },
                    "mileage": {
                        "mileagePrice": 2,
                        "mileage": 2.06,
                        "total": 4.12
                    },
                    "unit": {
                        "unitPrice": 2.5,
                        "unit": 3,
                        "total": 7.5
                    },
                    "priority": {
                        "total": 12.36
                    },
                    "recycle": {
                        "mileagePrice": 2,
                        "mileage": 2.06,
                        "total": 4.12
                    },
                    "cod": {
                        "cod": 0,
                        "scale": 0.001,
                        "fee": 0,
                        "total": 0
                    }
                }
            ]
        }

2.  POST 确认计价 {{host}}/api/wallet/price/order/confirm

        {
            "expressId": "5a53e",
            "priceId": "5c6aa2867c45a8df03695482"
        }
    
        {
        
            "code": "1",
            "msg": "成功",
            "data": {
                "priceId": "5c6b688b7c45a87922d01dfe",
                "expressId": "5a53e",
                "createTime": "2019-02-19T10:23:07.843+0800",
                "total": 30.74,
                "base": {
                    "basePrice": 15,
                    "total": 15
                },
                "mileage": {
                    "mileagePrice": 2,
                    "mileage": 2.06,
                    "total": 4.12
                },
                "unit": {
                    "unitPrice": 2.5,
                    "unit": 3,
                    "total": 7.5
                },
                "priority": {
                    "total": 0
                },
                "recycle": {
                    "mileagePrice": 2,
                    "mileage": 2.06,
                    "total": 4.12
                },
                "cod": {
                    "cod": 0,
                    "scale": 0.001,
                    "fee": 0,
                    "total": 0
                }
            }
        }


<a id="orge3d0fde"></a>

## DONE HomePage - Car Display

When user did not select the receiver, show all the car and not show the cost time.


<a id="orgb1f63d7"></a>

## DONE Order Page - Pay success


<a id="orgcc35981"></a>

### DONE Driver Navigation

When user return to homepage, the driver work page is not working.


<a id="org11fddd9"></a>

### DONE Charge Success

App did not jump to the right position after user charge the money.


<a id="orgfd0b375"></a>

### DONE Balance Refresh

App should refresh the page after user has been charged.

