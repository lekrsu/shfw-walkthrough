## Quick SHFW Configuration Walkthrough

### Project Description

SHFW is a custom firmware available for flashing via the Scooterhacking Utility app. Configuring it might be challenging for new users. This guide aims to provide a quick and easy way to apply the important basics. The understanding aspect of all this can be overwhelming, but it will come as a side effect of your own testing and thinking as we can't do that for you.

### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Ninebot G30](#ninebot-g30)
  - [Xiaomi Pro 2, 3](#xiaomi-pro-2-3)
  - [Xiaomi Essential, Lite, 1S](#xiaomi-essential-lite-1s)
- [Field Weakening Calculations and Logic](#field-weakening-calculations-and-logic)


### Installation

To install SHFW, follow these steps:

1. Download the flashing app from [https://utility.cfw.sh/](https://utility.cfw.sh/).

2. Supported Scooter Models:

   - **Ninebot G30**: You can flash this firmware if the DRV version is at 1.7.0 or below. If your DRV is above 1.7.0 and not higher than 1.7.3, you need to select "Attempt Downgrade". For DRV versions above 1.7.3, you'll need an ST-link. Refer to [https://joeybabcock.me/wiki/STLink_Ninebot_Max_ESC](https://joeybabcock.me/wiki/STLink_Ninebot_Max_ESC) for more information.

   - **Xiaomi Scooters**: If the BLE version is at or above 1.5.0, you'll need an ST-link for the dashboard. There are online guides available for this process.

   - **Ninebot EsX and Ex Series**: You can flash this firmware if the DRV version is below 2.7.0. Else you will need to use a st-link. There are online guides available for this process.

   - **Ninebot F-Series**: You can flash this firmware if the DRV version is below 5.7.0. Else you will need to use a st-link. There are online guides available for this process.

   - **Ninebot D-Series**: There is an experimental support for D-Series using the F-Series firmware. It's not known at which DRV version you will need a St-link. The guides should be identical to the F-Series.

3. Flash Procedure:

   - Ensure you have the correct scooter model.
   - Open the utility app, connect to the scooter.
   - Press "Load Custom" and select SHFW.
      - For G30, it's recommended to select the 187 DRV base.
      - If you have the new G30 motor then select the new motor option under the system config tab as well.

   **Note**: The number in the firmware name indicates the base DRV.

### Usage

Please be aware that the information provided below is intended for practical use, but it should be used with caution. Remember, field weakening, because of its nature, will not be efficient.

#### [Ninebot G30](#ninebot-g30)

To achieve the top speed for Ninebot G30, follow these configurations:

1. Set sport DPC curve to 30A with a flat curve (0.0 linear).
   - Configure the other modes as desired, preferably lower than sport for logical reasons.
   - Set the brake to 40A with a flat curve.
   - Set speed limit to off / 0.

2. Go to the field weakening tab and:
   - Enable field weakening for sport mode.
   - Configure as follows: 20 km/h, 0A, 1500.

3. Default tire size for G30 models are 10", but set 9.3" to get the dash speed to match GPS speed.

#### [Xiaomi Pro 2, 3](#xiaomi-pro-2-3)

For Xiaomi Pro 2 and mi3, use the following configurations:

1. Sport mode, DPC, 27A, flat curve (0.0 linear).

2. Go to the field weakening tab and:
   - Enable field weakening for sport mode.
   - Configure as follows: 20 km/h, 0A, 1300.

#### [Xiaomi Essential, Lite, 1S](#xiaomi-essential-lite-1s)

For Xiaomi Essential Lite, use these configurations:

1. Sport mode, DPC, 16A, flat curve (0.0 linear).

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

Here's a graph of the flux current applied at various speeds comparing the following 2 setups:
- 7A initial current, 24km/h start speed, 1500mA/km/h variable current
- 0A initial current, 24km/h start speed, 1500mA/km/h variable current

![graph comparing the above mentioned field weakening setups](/images/comparison_graph.png)


#### Recommended Field Weakening Settings

As per my experience and testing, it's recommended to keep the initial value at 0 and adjust the other parameters to achieve around 30-35A of requested flux. This range is believed to provide the best riding experience while balancing performance and safety.
The calculations and principles discussed in this section have been applied to configure the examples for the scooter models listed in this guide. These settings can vary depending on the specific scooter model and user preferences.

#### Upcoming Features

*To clarify, none of these features mentioned below are in any way guaranteed to be kept in the final release or guaranteed to be kept working the way described below.*

- **Brake Boost**
  - Brake boost is designed to significantly enhance e-brake performance, delivering powerful and responsive braking capabilities. However, it's essential to exercise caution when utilizing this feature. Excessive use of brake boost can lead to wheel lock-up, which, in turn, can have a detrimental impact on overall braking distance and stability. This situation is particularly concerning for riders who need to maintain control during emergency braking scenarios. Furthermore, front-wheel-drive (FWD) scooter users, such as Xiaomi riders, should be especially mindful when applying brake boost. Incorrect usage of this setting can potentially result in the scooter's back wheel lifting, leading to a front flip if not managed properly. Striking a balance between increased braking power and maintaining safe and controlled braking performance is paramount.

- **Acceleration Boost**
  - Acceleration boost provides additional torque in low RPM scenarios, significantly enhancing the scooter's overall performance and acceleration. This feature delivers an exhilarating and responsive riding experience. Users are encouraged to experiment with this setting to determine the level of acceleration that best aligns with their preferences. However, it's crucial to exercise caution, particularly in situations where traction and control are critical.

- **Further Customization**
  - *Field Weakening*
    - Flux Til Start: This setting provides a static amount of flux up until the field weakening activation speed. It can offer additional acceleration speed at the expense of slight vibration and increased battery usage.
    - The option to dynamically trade flux current to torque current has also been added. Mostly meant for those that want flux for acceleration purposes instead of maxing out top speed.

  - *Phase Limits*
    - Phase limits are customizable for torque and flux. The default settings are 65A for torque and 30A for flux.


#### ADC modding info (G30)

Special thanks to Lothean for providing valuable information on the R_adc logic.

[Open Calculator](https://lekrsu.github.io/shfw-walkthrough/calculator/)

**Note1**: Make sure to adjust R_adc, as it plays a significant role in ADC modding.
**Note2**: You can also meassure your battery voltage and then increase the divider voltage until the system voltage reading matches your previous meassuring.
**Note3**: You only need to touch this setting once you changed the resistors on the esc. 


### License

This project is licensed under the [MIT License](LICENSE).

Please review the [LICENSE](LICENSE) file for detailed terms and conditions.

**Note**: The MIT License is applied to this project. While it allows for wide use and modification, it comes with no warranties or guarantees. The project contributors and maintainers are not responsible for any issues, damages, or liabilities that may arise from the use of this software.

### Author Information

This guide has been written by **lekrsu**, who can be reached on Discord with the tag `lekrsu` and on Telegram with the username `lekrsu`. You're welcome to send a pull request if you feel like the information needs correction.
