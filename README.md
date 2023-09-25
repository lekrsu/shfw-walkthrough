# shfw-walkthrough

## Quick SHFW Configuration Walkthrough

### Project Description

SHFW is a custom firmware available for flashing via the Scooterhacking Utility app. Configuring it might be challenging for new users. This guide aims to provide a quick and easy way to apply the important basics. The understanding aspect of all this can be overwhelming, but it will come as a side effect of your own testing and thinking as we can't do that for you.

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
      - If you have the new G30 motor then select the new motor option under the system config tab as well.

### Usage

Please be aware that the information provided below is intended for practical use, but it should be used with caution.

#### [Ninebot G30](#ninebot-g30)

To achieve the top speed for Ninebot G30, follow these configurations:

1. Set sport DPC curve to 30A with a flat curve (0.0 linear).
   - Configure the other modes as desired, preferably lower than sport for logical reasons.
   - Set the brake to 40A with a flat curve.

2. Go to the field weakening tab and:
   - Enable field weakening for sport mode.
   - Configure as follows: 20 km/h, 0A, 1700.

3. Default tire size for G30 models are 10", but set 9.3" to get the dash speed to match GPS speed.

#### [Xiaomi Pro 2](#xiaomi-pro-2)

For Xiaomi Pro 2, use the following configurations:

1. Sport mode, DPC, 27A, flat curve (0.0 linear).

2. Go to the field weakening tab and:
   - Enable field weakening for sport mode.
   - Configure as follows: 20 km/h, 0A, 1300.

#### [Xiaomi Essential, Lite, 1S, 3](#xiaomi-essential-lite-1s-3)

For Xiaomi Essential, Lite, 1S, and 3 models, use these configurations:

1. Sport mode, DPC, 20A, flat curve (0.0 linear).

2. Go to the field weakening tab and:
   - Enable field weakening for sport mode.
   - Configure as follows: 13 km/h, 0A, 1000.
   
The rest of the configurations are up to you. Feel free to explore and set up profiles according to your preferences. Your imagination is the limit.

### Field Weakening Calculations and Logic

#### What is Field Weakening?

Field weakening is a technique commonly used with 3-phase electric motors to achieve higher speeds in electric vehicles like scooters. It allows the motor to operate beyond its rated voltage and rpm, which can result in increased top speed. However, implementing field weakening comes with trade-offs, including increased battery usage, higher motor temperatures, and potential additional expenses.

#### Field Weakening Flux Calculation

The calculation for field weakening flux is as follows:

field weakening flux = initial + ("current speed" - "field weakening start speed") * (variable / 1000)


- `initial`: The initial value of the field weakening flux.
- `"current speed"`: The current speed of the scooter.
- `"field weakening start speed"`: The speed at which field weakening should start.
- `variable`: A parameter that influences the rate of flux increase.


#### Recommended Field Weakening Settings

As per my experience and testing, it's recommended to keep the initial value at 0 and adjust the other parameters to achieve around 30-35A of requested flux. This range is believed to provide the best riding experience while balancing performance and safety.

#### Application to Scooter Models

The calculations and principles discussed in this section have been applied to configure the examples for the scooter models listed in this guide. These settings can vary depending on the specific scooter model and user preferences.




### License

This project is licensed under the [MIT License](LICENSE).

Please review the [LICENSE](LICENSE) file for detailed terms and conditions.

**Note**: The MIT License is applied to this project. While it allows for wide use and modification, it comes with no warranties or guarantees. The project contributors and maintainers are not responsible for any issues, damages, or liabilities that may arise from the use of this software.

### Author Information

This guide has been written by **lekrsu**, who can be reached on Discord with the tag `lekrsu` and on Telegram with the username `lekrsu`. You're welcome to send a pull request if you feel like the information needs correction.