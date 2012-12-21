if(typeof exports === 'undefined') exports = {};

exports.bone = {
    "P8_1": {
        "name": "DGND",
        "key": "P8_1"
    },
    "P8_2": {
        "name": "DGND",
        "key": "P8_2"
    },
    "P8_3": {
        "name": "GPIO1_6",
        "gpio": 38,
        "mux": "gpmc_ad6",
        "eeprom": 26,
        "key": "P8_3",
        "muxRegOffset": "0x018"
    },
    "P8_4": {
        "name": "GPIO1_7",
        "gpio": 39,
        "mux": "gpmc_ad7",
        "eeprom": 27,
        "key": "P8_4",
        "muxRegOffset": "0x01c"
    },
    "P8_5": {
        "name": "GPIO1_2",
        "gpio": 34,
        "mux": "gpmc_ad2",
        "eeprom": 22,
        "key": "P8_5",
        "muxRegOffset": "0x008"
    },
    "P8_6": {
        "name": "GPIO1_3",
        "gpio": 35,
        "mux": "gpmc_ad3",
        "eeprom": 23,
        "key": "P8_6",
        "muxRegOffset": "0x00c"
    },
    "P8_7": {
        "name": "TIMER4",
        "gpio": 66,
        "mux": "gpmc_advn_ale",
        "eeprom": 41,
        "key": "P8_7",
        "muxRegOffset": "0x090"
    },
    "P8_8": {
        "name": "TIMER7",
        "gpio": 67,
        "mux": "gpmc_oen_ren",
        "eeprom": 44,
        "key": "P8_8",
        "muxRegOffset": "0x094"
    },
    "P8_9": {
        "name": "TIMER5",
        "gpio": 69,
        "mux": "gpmc_ben0_cle",
        "eeprom": 42,
        "key": "P8_9",
        "muxRegOffset": "0x09c"
    },
    "P8_10": {
        "name": "TIMER6",
        "gpio": 68,
        "mux": "gpmc_wen",
        "eeprom": 43,
        "key": "P8_10",
        "muxRegOffset": "0x098"
    },
    "P8_11": {
        "name": "GPIO1_13",
        "gpio": 45,
        "mux": "gpmc_ad13",
        "eeprom": 29,
        "key": "P8_11",
        "muxRegOffset": "0x034"
    },
    "P8_12": {
        "name": "GPIO1_12",
        "gpio": 44,
        "mux": "gpmc_ad12",
        "eeprom": 28,
        "key": "P8_12",
        "muxRegOffset": "0x030"
    },
    "P8_13": {
        "name": "EHRPWM2B",
        "gpio": 23,
        "mux": "gpmc_ad9",
        "eeprom": 15,
        "pwm": {
            "muxmode": 4,
            "path": "ehrpwm.2:1",
            "name": "EHRPWM2B"
        },
        "key": "P8_13",
        "muxRegOffset": "0x024"
    },
    "P8_14": {
        "name": "GPIO0_26",
        "gpio": 26,
        "mux": "gpmc_ad10",
        "eeprom": 16,
        "key": "P8_14",
        "muxRegOffset": "0x028"
    },
    "P8_15": {
        "name": "GPIO1_15",
        "gpio": 47,
        "mux": "gpmc_ad15",
        "eeprom": 31,
        "key": "P8_15",
        "muxRegOffset": "0x03c"
    },
    "P8_16": {
        "name": "GPIO1_14",
        "gpio": 46,
        "mux": "gpmc_ad14",
        "eeprom": 30,
        "key": "P8_16",
        "muxRegOffset": "0x038"
    },
    "P8_17": {
        "name": "GPIO0_27",
        "gpio": 27,
        "mux": "gpmc_ad11",
        "eeprom": 17,
        "key": "P8_17",
        "muxRegOffset": "0x02c"
    },
    "P8_18": {
        "name": "GPIO2_1",
        "gpio": 65,
        "mux": "gpmc_clk",
        "eeprom": 40,
        "key": "P8_18",
        "muxRegOffset": "0x08c"
    },
    "P8_19": {
        "name": "EHRPWM2A",
        "gpio": 22,
        "mux": "gpmc_ad8",
        "eeprom": 14,
        "pwm": {
            "muxmode": 4,
            "path": "ehrpwm.2:0",
            "name": "EHRPWM2A"
        },
        "key": "P8_19",
        "muxRegOffset": "0x020"
    },
    "P8_20": {
        "name": "GPIO1_31",
        "gpio": 63,
        "mux": "gpmc_csn2",
        "eeprom": 39,
        "key": "P8_20",
        "muxRegOffset": "0x084"
    },
    "P8_21": {
        "name": "GPIO1_30",
        "gpio": 62,
        "mux": "gpmc_csn1",
        "eeprom": 38,
        "key": "P8_21",
        "muxRegOffset": "0x080"
    },
    "P8_22": {
        "name": "GPIO1_5",
        "gpio": 37,
        "mux": "gpmc_ad5",
        "eeprom": 25,
        "key": "P8_22",
        "muxRegOffset": "0x014"
    },
    "P8_23": {
        "name": "GPIO1_4",
        "gpio": 36,
        "mux": "gpmc_ad4",
        "eeprom": 24,
        "key": "P8_23",
        "muxRegOffset": "0x010"
    },
    "P8_24": {
        "name": "GPIO1_1",
        "gpio": 33,
        "mux": "gpmc_ad1",
        "eeprom": 21,
        "key": "P8_24",
        "muxRegOffset": "0x004"
    },
    "P8_25": {
        "name": "GPIO1_0",
        "gpio": 32,
        "mux": "gpmc_ad0",
        "eeprom": 20,
        "key": "P8_25",
        "muxRegOffset": "0x000"
    },
    "P8_26": {
        "name": "GPIO1_29",
        "gpio": 61,
        "mux": "gpmc_csn0",
        "eeprom": 37,
        "key": "P8_26",
        "muxRegOffset": "0x07c"
    },
    "P8_27": {
        "name": "GPIO2_22",
        "gpio": 86,
        "mux": "lcd_vsync",
        "eeprom": 57,
        "key": "P8_27",
        "muxRegOffset": "0x0e0"
    },
    "P8_28": {
        "name": "GPIO2_24",
        "gpio": 88,
        "mux": "lcd_pclk",
        "eeprom": 59,
        "key": "P8_28",
        "muxRegOffset": "0x0e8"
    },
    "P8_29": {
        "name": "GPIO2_23",
        "gpio": 87,
        "mux": "lcd_hsync",
        "eeprom": 58,
        "key": "P8_29",
        "muxRegOffset": "0x0e4"
    },
    "P8_30": {
        "name": "GPIO2_25",
        "gpio": 89,
        "mux": "lcd_ac_bias_en",
        "eeprom": 60,
        "key": "P8_30",
        "muxRegOffset": "0x0ec"
    },
    "P8_31": {
        "name": "UART5_CTSN",
        "gpio": 10,
        "mux": "lcd_data14",
        "eeprom": 7,
        "key": "P8_31",
        "muxRegOffset": "0x0d8"
    },
    "P8_32": {
        "name": "UART5_RTSN",
        "gpio": 11,
        "mux": "lcd_data15",
        "eeprom": 8,
        "key": "P8_32",
        "muxRegOffset": "0x0dc"
    },
    "P8_33": {
        "name": "UART4_RTSN",
        "gpio": 9,
        "mux": "lcd_data13",
        "eeprom": 6,
        "key": "P8_33",
        "muxRegOffset": "0x0d4"
    },
    "P8_34": {
        "name": "UART3_RTSN",
        "gpio": 81,
        "mux": "lcd_data11",
        "eeprom": 56,
        "pwm": {
            "muxmode": 2,
            "path": "ehrpwm.1:1",
            "name": "EHRPWM1B"
        },
        "key": "P8_34",
        "muxRegOffset": "0x0cc"
    },
    "P8_35": {
        "name": "UART4_CTSN",
        "gpio": 8,
        "mux": "lcd_data12",
        "eeprom": 5,
        "key": "P8_35",
        "muxRegOffset": "0x0d0"
    },
    "P8_36": {
        "name": "UART3_CTSN",
        "gpio": 80,
        "mux": "lcd_data10",
        "eeprom": 55,
        "pwm": {
            "muxmode": 2,
            "path": "ehrpwm.1:0",
            "name": "EHRPWM1A"
        },
        "key": "P8_36",
        "muxRegOffset": "0x0c8"
    },
    "P8_37": {
        "name": "UART5_TXD",
        "gpio": 78,
        "mux": "lcd_data8",
        "eeprom": 53,
        "key": "P8_37",
        "muxRegOffset": "0x0c0"
    },
    "P8_38": {
        "name": "UART5_RXD",
        "gpio": 79,
        "mux": "lcd_data9",
        "eeprom": 54,
        "key": "P8_38",
        "muxRegOffset": "0x0c4"
    },
    "P8_39": {
        "name": "GPIO2_12",
        "gpio": 76,
        "mux": "lcd_data6",
        "eeprom": 51,
        "key": "P8_39",
        "muxRegOffset": "0x0b8"
    },
    "P8_40": {
        "name": "GPIO2_13",
        "gpio": 77,
        "mux": "lcd_data7",
        "eeprom": 52,
        "key": "P8_40",
        "muxRegOffset": "0x0bc"
    },
    "P8_41": {
        "name": "GPIO2_10",
        "gpio": 74,
        "mux": "lcd_data4",
        "eeprom": 49,
        "key": "P8_41",
        "muxRegOffset": "0x0b0"
    },
    "P8_42": {
        "name": "GPIO2_11",
        "gpio": 75,
        "mux": "lcd_data5",
        "eeprom": 50,
        "key": "P8_42",
        "muxRegOffset": "0x0b4"
    },
    "P8_43": {
        "name": "GPIO2_8",
        "gpio": 72,
        "mux": "lcd_data2",
        "eeprom": 47,
        "key": "P8_43",
        "muxRegOffset": "0x0a8"
    },
    "P8_44": {
        "name": "GPIO2_9",
        "gpio": 73,
        "mux": "lcd_data3",
        "eeprom": 48,
        "key": "P8_44",
        "muxRegOffset": "0x0ac"
    },
    "P8_45": {
        "name": "GPIO2_6",
        "gpio": 70,
        "mux": "lcd_data0",
        "eeprom": 45,
        "pwm": {
            "muxmode": 3,
            "path": "ehrpwm.2:0",
            "name": "EHRPWM2A"
        },
        "key": "P8_45",
        "muxRegOffset": "0x0a0"
    },
    "P8_46": {
        "name": "GPIO2_7",
        "gpio": 71,
        "mux": "lcd_data1",
        "eeprom": 46,
        "pwm": {
            "muxmode": 3,
            "path": "ehrpwm.2:1",
            "name": "EHRPWM2B"
        },
        "key": "P8_46",
        "muxRegOffset": "0x0a4"
    },
    "P9_1": {
        "name": "DGND",
        "key": "P9_1"
    },
    "P9_2": {
        "name": "DGND",
        "key": "P9_2"
    },
    "P9_3": {
        "name": "VDD_3V3",
        "key": "P9_3"
    },
    "P9_4": {
        "name": "VDD_3V3",
        "key": "P9_4"
    },
    "P9_5": {
        "name": "VDD_5V",
        "key": "P9_5"
    },
    "P9_6": {
        "name": "VDD_5V",
        "key": "P9_6"
    },
    "P9_7": {
        "name": "SYS_5V",
        "key": "P9_7"
    },
    "P9_8": {
        "name": "SYS_5V",
        "key": "P9_8"
    },
    "P9_9": {
        "name": "PWR_BUT",
        "key": "P9_9"
    },
    "P9_10": {
        "name": "SYS_RESETn",
        "key": "P9_10"
    },
    "P9_11": {
        "name": "UART4_RXD",
        "gpio": 30,
        "mux": "gpmc_wait0",
        "eeprom": 18,
        "key": "P9_11",
        "muxRegOffset": "0x070"
    },
    "P9_12": {
        "name": "GPIO1_28",
        "gpio": 60,
        "mux": "gpmc_ben1",
        "eeprom": 36,
        "key": "P9_12",
        "muxRegOffset": "0x078"
    },
    "P9_13": {
        "name": "UART4_TXD",
        "gpio": 31,
        "mux": "gpmc_wpn",
        "eeprom": 19,
        "key": "P9_13",
        "muxRegOffset": "0x074"
    },
    "P9_14": {
        "name": "EHRPWM1A",
        "gpio": 50,
        "mux": "gpmc_a2",
        "eeprom": 34,
        "pwm": {
            "muxmode": 6,
            "path": "ehrpwm.1:0",
            "name": "EHRPWM1A"
        },
        "key": "P9_14",
        "muxRegOffset": "0x048"
    },
    "P9_15": {
        "name": "GPIO1_16",
        "gpio": 48,
        "mux": "mii1_rxd3",
        "eeprom": 32,
        "key": "P9_15",
        "muxRegOffset": "0x134"
    },
    "P9_16": {
        "name": "EHRPWM1B",
        "gpio": 51,
        "mux": "gpmc_a3",
        "eeprom": 35,
        "pwm": {
            "muxmode": 6,
            "path": "ehrpwm.1:1",
            "name": "EHRPWM1B"
        },
        "key": "P9_16",
        "muxRegOffset": "0x04c"
    },
    "P9_17": {
        "name": "I2C1_SCL",
        "gpio": 5,
        "mux": "spi0_cs0",
        "eeprom": 3,
        "key": "P9_17",
        "muxRegOffset": "0x15c"
    },
    "P9_18": {
        "name": "I2C1_SDA",
        "gpio": 4,
        "mux": "spi0_d1",
        "eeprom": 2,
        "key": "P9_18",
        "muxRegOffset": "0x158"
    },
    "P9_19": {
        "name": "I2C2_SCL",
        "gpio": 13,
        "mux": "uart1_rtsn",
        "eeprom": 9,
        "key": "P9_19",
        "muxRegOffset": "0x17c"
    },
    "P9_20": {
        "name": "I2C2_SDA",
        "gpio": 12,
        "mux": "uart1_ctsn",
        "eeprom": 10,
        "key": "P9_20",
        "muxRegOffset": "0x178"
    },
    "P9_21": {
        "name": "UART2_TXD",
        "gpio": 3,
        "mux": "spi0_d0",
        "eeprom": 1,
        "pwm": {
            "muxmode": 3,
            "path": "ehrpwm.0:1",
            "name": "EHRPWM0B"
        },
        "key": "P9_21",
        "muxRegOffset": "0x154"
    },
    "P9_22": {
        "name": "UART2_RXD",
        "gpio": 2,
        "mux": "spi0_sclk",
        "eeprom": 0,
        "pwm": {
            "muxmode": 3,
            "path": "ehrpwm.0:0",
            "name": "EHRPWM0A"
        },
        "key": "P9_22",
        "muxRegOffset": "0x150"
    },
    "P9_23": {
        "name": "GPIO1_17",
        "gpio": 49,
        "mux": "gpmc_a1",
        "eeprom": 33,
        "key": "P9_23",
        "muxRegOffset": "0x044"
    },
    "P9_24": {
        "name": "UART1_TXD",
        "gpio": 15,
        "mux": "uart1_txd",
        "eeprom": 12,
        "key": "P9_24",
        "muxRegOffset": "0x184"
    },
    "P9_25": {
        "name": "GPIO3_21",
        "gpio": 117,
        "mux": "mcasp0_ahclkx",
        "eeprom": 66,
        "key": "P9_25",
        "muxRegOffset": "0x1ac"
    },
    "P9_26": {
        "name": "UART1_RXD",
        "gpio": 14,
        "mux": "uart1_rxd",
        "eeprom": 11,
        "key": "P9_26",
        "muxRegOffset": "0x180"
    },
    "P9_27": {
        "name": "GPIO3_19",
        "gpio": 115,
        "mux": "mcasp0_fsr",
        "eeprom": 64,
        "key": "P9_27",
        "muxRegOffset": "0x1a4"
    },
    "P9_28": {
        "name": "SPI1_CS0",
        "gpio": 113,
        "mux": "mcasp0_ahclkr",
        "eeprom": 63,
        "pwm": {
            "muxmode": 4,
            "path": "ecap.2",
            "name": "ECAPPWM2"
        },
        "key": "P9_28",
        "muxRegOffset": "0x19c"
    },
    "P9_29": {
        "name": "SPI1_D0",
        "gpio": 111,
        "mux": "mcasp0_fsx",
        "eeprom": 61,
        "pwm": {
            "muxmode": 1,
            "path": "ehrpwm.0:1",
            "name": "EHRPWM0B"
        },
        "key": "P9_29",
        "muxRegOffset": "0x194"
    },
    "P9_30": {
        "name": "SPI1_D1",
        "gpio": 112,
        "mux": "mcasp0_axr0",
        "eeprom": 62,
        "key": "P9_30",
        "muxRegOffset": "0x198"
    },
    "P9_31": {
        "name": "SPI1_SCLK",
        "gpio": 110,
        "mux": "mcasp0_aclkx",
        "eeprom": 65,
        "pwm": {
            "muxmode": 1,
            "path": "ehrpwm.0:0",
            "name": "EHRPWM0A"
        },
        "key": "P9_31",
        "muxRegOffset": "0x190"
    },
    "P9_32": {
        "name": "VDD_ADC",
        "key": "P9_32"
    },
    "P9_33": {
        "name": "AIN4",
        "ain": 4,
        "eeprom": 71,
        "scale": 4096,
        "key": "P9_33"
    },
    "P9_34": {
        "name": "GNDA_ADC",
        "key": "P9_34"
    },
    "P9_35": {
        "name": "AIN6",
        "ain": 6,
        "eeprom": 73,
        "scale": 4096,
        "key": "P9_35"
    },
    "P9_36": {
        "name": "AIN5",
        "ain": 5,
        "eeprom": 72,
        "scale": 4096,
        "key": "P9_36"
    },
    "P9_37": {
        "name": "AIN2",
        "ain": 2,
        "eeprom": 69,
        "scale": 4096,
        "key": "P9_37"
    },
    "P9_38": {
        "name": "AIN3",
        "ain": 3,
        "eeprom": 70,
        "scale": 4096,
        "key": "P9_38"
    },
    "P9_39": {
        "name": "AIN0",
        "ain": 0,
        "eeprom": 67,
        "scale": 4096,
        "key": "P9_39"
    },
    "P9_40": {
        "name": "AIN1",
        "ain": 1,
        "eeprom": 68,
        "scale": 4096,
        "key": "P9_40"
    },
    "P9_41": {
        "name": "CLKOUT2",
        "gpio": 20,
        "mux": "xdma_event_intr1",
        "eeprom": 13,
        "key": "P9_41",
        "muxRegOffset": "0x1b4"
    },
    "P9_42": {
        "name": "GPIO0_7",
        "gpio": 7,
        "mux": "ecap0_in_pwm0_out",
        "eeprom": 4,
        "pwm": {
            "muxmode": 0,
            "path": "ecap.0",
            "name": "ECAPPWM0"
        },
        "key": "P9_42",
        "muxRegOffset": "0x164"
    },
    "P9_43": {
        "name": "DGND",
        "key": "P9_43"
    },
    "P9_44": {
        "name": "DGND",
        "key": "P9_44"
    },
    "P9_45": {
        "name": "DGND",
        "key": "P9_45"
    },
    "P9_46": {
        "name": "DGND",
        "key": "P9_46"
    },
    "USR0": {
        "name": "USR0",
        "gpio": 53,
        "led": "usr0",
        "mux": "gpmc_a5",
        "key": "USR0",
        "muxRegOffset": "0x054"
    },
    "USR1": {
        "name": "USR1",
        "gpio": 54,
        "led": "usr1",
        "mux": "gpmc_a6",
        "key": "USR1",
        "muxRegOffset": "0x058"
    },
    "USR2": {
        "name": "USR2",
        "gpio": 55,
        "led": "usr2",
        "mux": "gpmc_a7",
        "key": "USR2",
        "muxRegOffset": "0x05c"
    },
    "USR3": {
        "name": "USR3",
        "gpio": 56,
        "led": "usr3",
        "mux": "gpmc_a8",
        "key": "USR3",
        "muxRegOffset": "0x060"
    }
};

