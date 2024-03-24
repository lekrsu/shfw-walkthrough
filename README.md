## Quick SHFW Configuration Walkthrough

SHFW is a custom firmware available for flashing via the Scooterhacking Utility app. Configuring it might be challenging for new users. This guide aims to provide a quick and easy way to apply the important basics. The understanding aspect of all this can be overwhelming, but it will come as a side effect of your own testing and thinking as we can't do that for you.

- [Quick SHFW Configuration Walkthrough](#quick-shfw-configuration-walkthrough)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Peak Current Draw Calculator](#peak-current-draw-calculator)
    - [Ninebot G30](#ninebot-g30)
    - [Xiaomi Pro 2, 3](#xiaomi-pro-2-3)
    - [Xiaomi Essential, Lite, 1S](#xiaomi-essential-lite-1s)
  - [Field Weakening Calculations and Logic](#field-weakening-calculations-and-logic)
    - [What is Field Weakening?](#what-is-field-weakening)
    - [Field Weakening Flux Calculation](#field-weakening-flux-calculation)
  - [Custom batteries and BMS emulation](#custom-batteries-and-bms-emulation)
    - [Upcoming Features](#upcoming-features)
    - [ADC modding info (G30)](#adc-modding-info-g30)
- [Contributors](#contributors)
  - [License](#license)
  - [Author Information](#author-information)


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

#### Peak Current Draw Calculator

- **Torque Amps Calculation**: Users can input their torque amps (\(I_q\)) to calculate the torque component accurately.
- **Field Weakening Calculation**: By entering the initial flux in A, variable flux in mAh, current max speed in km/h, and start speed in km/h, the calculator determines the flux component (\(I_d\)), incorporating field weakening effects.
- **Peak Current Draw**: With the input parameters, the calculator computes the peak current draw (\(I_{total}\)), providing essential insights into the system's maximum electrical demand.

[**Try the Peak Current Draw Calculator**](https://lekrsu.github.io/shfw-walkthrough/logic/index.html) - A user-friendly tool designed for clarity and efficiency in calculating electrical parameters.


#### [Ninebot G30](#ninebot-g30)

To achieve the top speed for Ninebot G30, follow these configurations:

1. Set sport DPC curve to 30A with a flat curve (0.0 linear).
   - Configure the other modes as desired, preferably lower than sport for logical reasons.
   - Set the brake to 40A with a flat curve.
   - Set speed limit to off / 0.

2. Go to the field weakening tab and:
   - Enable field weakening for sport mode.
   - Configure as follows: 22 km/h, 5A, 1500.

3. Default tire size for G30 models are 10", but set 9.3" to get the dash speed to match GPS speed.

#### [Xiaomi Pro 2, 3](#xiaomi-pro-2-3)

For Xiaomi Pro 2 and mi3, use the following configurations:

1. Sport mode, DPC, 25A, flat curve (0.0 linear).

2. Go to the field weakening tab and:
   - Enable field weakening for sport mode.
   - Configure as follows: 22 km/h, 5A, 1200.

#### [Xiaomi Essential, Lite, 1S](#xiaomi-essential-lite-1s)

For Xiaomi Essential Lite, use these configurations:

1. Sport mode, DPC, 16A, flat curve (0.0 linear).

2. Go to the field weakening tab and:
   - Enable field weakening for sport mode.
   - Configure as follows: 17 km/h, 5A, 1000.
   
The rest of the configurations are up to you. Feel free to explore and set up profiles according to your preferences.If it isn't reaching the performance you expected then consider fine-tuning it to your liking.

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

### Custom batteries and BMS emulation

After installing a custom battery in specific scooter models, you might notice that the display no longer shows the battery charge percentage. This occurs because the scooter's original Battery Management System (BMS) uses a communication cable to provide this information, among other functions. As a workaround, BMS emulation can be employed. This method calculates the battery's charge level based purely on the system's voltage, a viable approach due to the linear relationship between voltage and charge state.

For configuration, access the Utility app and navigate to the 'Config' tab. Here, you will find the BMS emulation option towards the bottom. In this section, enter the details of your battery, including the number of series groups and the total capacity. It's crucial to ensure the minimum and maximum cell group voltages are set correctly, ideally matching or being more conservative than those specified by your BMS. The voltage range for a Li-Ion cell typically spans from 3 to 4.2V, but your BMS may have specific cutoff limits for charging and discharging. Adjust these settings according to your BMS's limits or opt for the default if uncertain.

Note, BMS emulation is necessary only if you've completely replaced the original battery. If you've added an additional pack in series with matching or higher capacity, or if you have another battery in parallel, BMS emulation is not required. In cases of parallel battery configurations, the primary adjustment needed is to disable the charging mode, which can be found in the system settings. This guide aims to facilitate a seamless transition to custom battery usage, ensuring optimal performance and compatibility.

Given:
- `V_min` = Minimum voltage of the battery pack when fully discharged.
- `V_max` = Maximum voltage of the battery pack when fully charged.
- `V_current` = Current voltage of the battery pack.

The formula to calculate the battery percentage (`Battery_%`) is:

Battery_% = ((V_current - V_min) / (V_max - V_min)) * 100

Where:
- `Battery_%` is the state of charge of the battery pack as a percentage.
- `V_min` is the total voltage of the pack when all cells are at their minimum voltage.
- `V_max` is the total voltage of the pack when all cells are at their maximum voltage.
- `V_current` is the current total voltage of the battery pack.


#### Upcoming Features

*To clarify, none of these features mentioned below are in any way guaranteed to be kept in the final release or guaranteed to be kept working the way described below.*

- Acceleration boost, more torque for low speeds.
- Brake boost, increases effectiveness of e-brake. Will lock up your motor if needed.
- Custom PWM range, 4-24khz range.
- Phase amp display, mileage display (with comms).


#### ADC modding info (G30)

Special thanks to Lothean for providing valuable information on the R_adc logic.

[Open Calculator](https://lekrsu.github.io/shfw-walkthrough/calculator/)

**Note1**: Make sure to adjust R_adc, as it plays a significant role in ADC modding.
**Note2**: You can also measure your battery voltage and then increase the divider voltage until the system voltage reading matches your previous meassuring.
**Note3**: You only need to touch this setting once you changed the resistors on the esc. 


## Contributors

- **[lekrsu](https://github.com/lekrsu)** - Main contributor and architect.
- **[Paul](https://github.com/paulederbaus)** - Added valuable insights and documentation.
- **[BXLR](https://github.com/nopbxlr)** - Instrumental in development, making everything possible. Kudos!
- **[Edex](https://github.com/rasil1127)** - Provided critical support and logic validation.
- **[Lex](https://github.com/LexNastin)** - Supplied essential images and visuals.
- **[PureComedi](https://github.com/PureComedi)** - Ensured top-notch grammar and structural integrity.

> A big thank you to everyone who has contributed to making this project a success!


### License

This project is licensed under the [MIT License](LICENSE).

Please review the [LICENSE](LICENSE) file for detailed terms and conditions.

**Note**: The MIT License is applied to this project. While it allows for wide use and modification, it comes with no warranties or guarantees. The project contributors and maintainers are not responsible for any issues, damages, or liabilities that may arise from the use of this software.

### Author Information

This guide has been written by **lekrsu**, who can be reached on Discord with the tag `lekrsu` and on Telegram with the username `lekrsu`. You're welcome to send a pull request if you feel like the information needs correction.
