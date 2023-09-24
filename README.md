# shfw-walkthrough

## Quick SHFW Configuration Walkthrough

### Project Description

SHFW is a custom firmware available for flashing via the Scooterhacking Utility app. Configuring it might be challenging for new users. This guide aims to provide a quick and easy way to understand the important basics.

### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Ninebot G30](#ninebot-g30)
  - [Xiaomi Pro 2](#xiaomi-pro-2)
  - [Xiaomi Essential, Lite, 1S, 3](#xiaomi-essential-lite-1s-3)

### Installation

To install SHFW, follow these steps:

1. Download the flashing app from [https://utility.cfw.sh/](https://utility.cfw.sh/).

2. Supported Scooter Models:

   - **Ninebot G30**: You can flash this firmware if the DRV version is at 1.7.0 or below. For DRV versions above 1.7.0, you'll need an ST-link. Refer to [https://joeybabcock.me/wiki/STLink_Ninebot_Max_ESC](https://joeybabcock.me/wiki/STLink_Ninebot_Max_ESC) for more information.

   - **Xiaomi Scooters**: If the BLE version is at or above 1.5.7, you'll need an ST-link. There are online guides available for this process.

3. Flash Procedure:

   - Ensure you have the correct scooter model.
   - Open the utility app, connect to the scooter.
   - Press "Load Custom" and select SHFW.
   - For G30, it's recommended to select the 187 DRV base.

### Usage

#### [Ninebot G30](#ninebot-g30)

To achieve the top speed for Ninebot G30, follow these configurations:

1. Set sport DPC curve to 30A with a flat curve.
   - Configure the other modes as desired, preferably lower than sport for logical reasons.
   - Set the brake to 40A with a flat curve.

2. Go to the field weakening tab and:
   - Enable field weakening for sport mode.
   - Configure as follows: 20 km/h, 0A, 1700.

3. Default tire size for G30 models are 10", but set 9.3" to get the dash speed to match GPS speed.

#### [Xiaomi Pro 2](#xiaomi-pro-2)

For Xiaomi Pro 2, use the following configurations:

1. Sport mode, DPC, 27A, flat curve.

2. Go to the field weakening tab and:
   - Enable field weakening for sport mode.
   - Configure as follows: 20 km/h, 0A, 1300.

#### [Xiaomi Essential, Lite, 1S, 3](#xiaomi-essential-lite-1s-3)

For Xiaomi Essential, Lite, 1S, and 3 models, use these configurations:

1. Sport mode, DPC, 20A, flat curve.

2. Go to the field weakening tab and:
   - Enable field weakening for sport mode.
   - Configure as follows: 15 km/h, 0A, 1000.
   
The rest of the configurations are up to you. Feel free to explore and set up profiles according to your preferences. Your imagination is the limit.

### Field Weakening Calculations and Logic

Field weakening, a technique used with 3-phase electric motors, is essential for optimizing the flux and performance of your scooter. In a nutshell:

Field weakening flux is calculated as follows: `initial + ("current speed" - "field weakening start speed") * (variable / 1000)`.

**Warning**: Modifying field weakening settings without a deep understanding of the consequences can potentially lead to unstable or unsafe riding conditions. It's strongly recommended that you proceed with caution and, if unsure, consult with experts or seek guidance from the scooter hacking community or read articles on the matter.


From my own experience and testing, I've found that keeping the initial value at 0 and adjusting the other parameters to achieve around 30-35A of requested flux leads to the best riding experience. Therefore, the ideal outcome should fall within that range.

These calculations and principles have been used to configure the examples for the scooter models listed in this guide.


### License

This project is licensed under the [Creative Commons Attribution 4.0 International License (CC BY 4.0)](LICENSE).

Please review the [LICENSE](LICENSE) file for detailed terms and conditions.

### Author Information

This guide has been written by **lekrsu**, who can be reached on Discord with the tag `lekrsu` and on Telegram with the username `lekrsu`. The content of this guide is based on their own findings and logical reasoning, making it a valuable resource for understanding SHFW configurations and optimizing your scooter's performance.
