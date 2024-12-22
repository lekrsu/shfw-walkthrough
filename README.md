# Quick SHFW Configuration Walkthrough

SHFW is a custom firmware available for flashing via the Scooterhacking Utility app. Configuring it might be challenging for new users. This guide aims to provide a quick and easy way to apply the important basics. The understanding aspect of all this can be overwhelming, but it will come as a side effect of your own testing and thinking as we can't do that for you.

Join the discussions on [Telegram](https://t.me/scooterhackingchat) and [Discord](https://scooterhack.in/discord).
<p align="left">
  <a href="https://discord.gg/scooterhacking" target="_blank">
    <img src="https://dcbadge.limes.pink/api/server/https://discord.gg/scooterhacking"/>
  </a>
</p>


### Installation

To install SHFW, follow these steps:

1. Download the flashing app from [https://utility.cfw.sh/](https://utility.cfw.sh/).

2. Supported Scooter Models:

   - **Ninebot G30**: You can flash this firmware if the DRV version is at 1.7.0 or below. If your DRV is above 1.7.0 and not higher than 1.7.3, you need to select "Attempt Downgrade". For DRV versions above 1.7.3, you'll need an ST-Link. Refer to [this](https://joeybabcock.me/wiki/STLink_Ninebot_Max_ESC) for more information. Reflasher will flash patched 1.8.7, so if you've just ST-Linked and see this version, don't be alarmed.

- **Xiaomi Scooters**: If the BLE version is at 1.5.5 or above, then you'll need to ST-Link downgrade the dashboard. [ST-Link Downgrade Guide](https://lekrsu.github.io/shfw-walkthrough/stlinking/xiaomi-ble). Flashing on M365 with a 4-dot dashboard requires extra steps detailed in the [4th section of installation](https://lekrsu.github.io/shfw-walkthrough/stlinking/xiaomi-ble#installation).

   - **Ninebot EsX**: Every version is supported.
   
   - **Ex Series**: [Not E2-series, only the older E22, E45, etc]You can flash this firmware if the DRV version is below 2.7.0. Else you will need to use a ST-Link. There are online guides available for this process.

   - **Ninebot F-Series**: [Older SHFW 0.3.6] You can flash this firmware if the DRV version is below 5.7.0. Else you will need to use a ST-Link. There are online guides available for this process. The app will prompt for updates even if there's none, be aware.

   - **Ninebot D-Series**: [Currently not working] There is an experimental support for D-Series using the F-Series firmware. It's not known at which DRV version you will need a ST-Link. The guides should be identical to the F-Series.

    | Model | Compatible BLE | Compatible DRV |
    |:--|:--|:--|
    |  | *ST-Link if incompatible* | *ST-Link if incompatible* |
    | Ninebot G30 | All | [Up to 1.7.3](https://joeybabcock.me/wiki/STLink_Ninebot_Max_ESC) |
    | Ninebot G2 | All | ST-Link |
    | Ninebot F2-Series | N/A | N/A |
    | Xiaomi Essential, 1s, pro2, mi3 | Below 1.5.5 | All |
    | Ninebot EsX | All | All |
    | Ex Series | All | Below 2.7.0 |
    | Ninebot E2, E2D, E2 Pro | N/A | N/A |
    | Ninebot F-Series | All | Below 5.7.0 |
    | Ninebot D-Series | All  | Experimental (F-Series firmware, unknown) |

4. Flash Procedure:

   - Open the utility app, connect to the scooter.
   - Press "Install/update SHFW" and select a version of the highest number. If there's only one, select that and press flash. If it fails, and the above grid claims a supported version, try the "attempt drv downgrade" flash before SHFW.
      - If you have the newer Gen 3 G30 motor then select the new motor option under the motor config tab as well. If you don't know which one you have, compare the motor serial to this:

      | Motor Serial Number (SN) | Generation           | Models                               |
      |--------------------------|----------------------|--------------------------------------|
      | Starts with 6            | First Generation     | Most older models                    |
      | Starts with 9            | Second Generation    | G30Ps, some G30Lx models             |
      | Includes PCAH            | Third Generation     | G30P                                 |
      | Includes PAAH            | Third Generation     | G30E                                 |
      | Includes PADH/PADJ       | Third Generation     | G30D                                 |
   
   **Note**: If BLE/DRV is low enough to be supported, but fails to flash, then press "Attempt DRV downgrade" and press flash.
   
5. Flash Procedure for the 4-dot dashboard (Xiaomi M365):

   **Note**: Because the M365's 4-dot dashboard isn't natively supported, you need to do some extra steps before flashing SHFW.
   1. Download [Utility](https://utility.cfw.sh/).
   2. Connect, go to 'Load from repo', select DRV, select the latest version and press 'Start flash'. 
   3. Download the modified M365-ProBLE-1.zip from the pinned message in the Scooterhacking.org discord server's #m365 channel.
   4. Connect to the scooter with Scooterhacking Utility, go to the flash tab, press "Load from file" and select the BLE zip that you just downloaded.
   5. SHFW will now be available via the Install SHFW tab and the scooter identifies as 'Pro'.

6. Flashing back stock firmware on a M365 with 4-dot dashboard, if the need to revert the changes occurs.
   1. You will have to download the M365 DRV and BLE firmware zip archives from the [Scooterhacking.org repo](https://firmware.scooterhacking.org/m365/) and modify the info.json file in both of them. I recommend downloading BLE072 and DRV156.
   2. Open the info.json with any text editor in the DRV zip archive, and change "enforceModel" from true to false
   3. Open the info.json the BLE zip, change "enforceModel" to false, and replace "mi_BLE_LEGACY" with "mi_BLE_NRF51822QFAA".
   4. Connect to your scooter with Scooterhacking Utility, go to the flash tab, press "Load from file" and select the DRV zip that you just modified. If you did everything correctly, Utility shouldn't throw an error, and you can press flash. It might throw an error when flashing, and it will prompt you for automatic retry, press yes.
   5. Flash the BLE zip the same way as the DRV.
   6. If you did everything right, your scooter should be back to it's original state.


### Usage

Please be aware that the information provided below is intended for practical use, but it should be used with caution. Remember, field weakening, because of its nature, will not be efficient.

#### Peak Current Draw Calculator Features

- **Torque Amps Calculation**: Users can input their torque amps (Iq) to calculate the torque component accurately.
- **Field Weakening Calculation**: By entering the initial flux in A, variable flux in mAh, current max speed in km/h, and start speed in km/h, the calculator determines the flux component (Id), incorporating field weakening effects.
- **Peak Current Draw**: With the input parameters, the calculator computes the peak current draw (I_total), providing essential insights into the system's maximum electrical demand.

To customize these phase limits, check out the Iq and Id sliders under "Field Weakening".

[**Try the Peak Current Draw Calculator**](https://lekrsu.github.io/shfw-walkthrough/logic/index.html) - A user-friendly tool designed for clarity and efficiency in calculating electrical parameters. Keep in mind, this is peak, not showing actual real life battery draw, but it helps visualize it.

<p align="center">
  <img src="images/I_total.png" width="95%" alt="I_total graph">
  <center>Graph showing Torque 30A, initial 5A flux, with 100mA increments of variable flux, from the speeds 15 km/h and 25 km/h.</center>
</p>

#### [Ninebot G30, G2](#ninebot-g30-g2)

To achieve the top speed for Ninebot G30, follow these configurations:

   - Enable "expert view" on the top right.

1. Set sport DPC curve to 25A that's fully quadratic (1.0)
   - Configure the other modes as desired, preferably lower than sport for logical reasons.
   - Keep the speed limit to off / 0.
   - Acceleration boost, 100%.
   - Brake boost, 50%.
   - Overmodulation on for sport/drive

You can set eco and drive to lower values, e.g. 10A eco, 25A drive. Drive will use less current since we won't enable field weakening.

2. Go to the field weakening tab and enable field weakening for sport mode:

   ### Normal use:
   - Configure as follows:
     - Speed: 20 km/h
     - Initial: 0A
     - Variable: 1200

   ### Higher efficiency:
   - Configure as follows:
     - Speed: 20 km/h
     - Initial: 0A
     - Variable: 600

   ### Peak speeds:
   - Configure as follows:
     - Speed: 20 km/h
     - Initial: 0A
     - Variable: 2000

4. Default tire size for Max models are 10", but set 9.3" on G30 and 9.7" on G2 to get the dash speed to match GPS speed.

5. Under Motor Settings, select 20 or 24khz. G2 doesn't have this option.

Additional information: Newer G30 BMS models might run firmware limited to 28A total battery current. These, will have worse performance compared to the older 40A current models.

#### [Xiaomi Pro 2, 3](#xiaomi-pro-2-3)

For Xiaomi Pro 2 and mi3, use the following configurations:

   - Enable "expert view" on the top right.

1. Sport mode, DPC, 20A, fully quadratic (1.0).
   - Acceleration boost, 100%.
   - Brake boost, 0-100%, up to you, be aware that it's strong.
  - Brake, 30A flat (0.0)
  - Overmodulation on for sport/drive

You can set eco and drive to lower values, e.g. 10A eco, 20A drive. Drive will use less current since we won't enable field weakening.

2. Go to the field weakening tab and:
   - Enable field weakening for sport mode.
   - Configure as follows: 20 km/h, 0A, 1500.

4. Under Motor Settings, select 20 or 24khz.

#### [Xiaomi Essential, Lite, 1S](#xiaomi-essential-lite-1s)

For Xiaomi Essential & 1S, use these configurations:

   - Enable "expert view" on the top right.

1. Sport mode, DPC, 18A, fully quadratic (1.0).
   - Acceleration boost, 50%.
   - Brake boost, 0-100%, up to you, be aware that it's strong.
   - Brake, 30A flat (0.0)
   - Overmodulation on for sport/drive

You can set eco and drive to lower values, e.g. 10A eco, 18A drive. Drive will use less current since we won't enable field weakening.
  
2. Go to the field weakening tab and:

   - Enable field weakening for sport mode.
   - Configure as follows: 15 km/h, 0A, 1500.

4. Under Motor Settings, select 20 or 24khz.

#### [Ninebot EsX, Ex](#ninebot-esx-ex)

For Ninebot EsX, Ex, use these configurations:

   - Enable "expert view" on the top right.

1. Sport mode, DPC, 18A, fully quadratic (1.0).
   - Acceleration boost, 50%.
   - Brake boost, 0-100%, up to you, be aware that it's strong.
   - Brake, 55A flat (0.0)
   - Overmodulation on for sport/drive

You can set eco and drive to lower values, e.g. 10A eco, 18A drive. Drive will use less current since we won't enable field weakening.
  
2. Go to the field weakening tab and:
   - Enable field weakening for sport mode.
   - Configure as follows: 15 km/h, 0A, 1500.

4. Under Motor Settings, select 20 or 24khz.

## Explanation of PI Control and Acceleration Boost

### PI Control for Voltage Time Conversion

The PI control system converts amperes into voltage time. This process scales the voltage time from 0 to 31128, where 31128 represents 100%. This scaling is done for both current components. If the total time exceeds 31128, the values are adjusted down to a new value accordingly.

### Voltage Measurement and Compensation

The system measures only the voltage time, using a 100% duty cycle at maximum potential speed. This method allows the system to perform consistently at different voltages without requiring firmware adjustments. The PWM (Pulse Width Modulation) cycle is kept high continuously, operating similarly to a DC engine.

### Implementation Specifics

- **16-bit Counters:** The system uses 16-bit counters to implement PWM. The counters stop 4 loops before the end of the frequency.
- **Duty Cycle Limit:** The duty cycle is limited to 95%, as achieving 100% is theoretically possible but impractical.
- **Voltage Relevance:** Voltage is not directly relevant for control. Instead, the control manages the phase duration. For example:
  - Phase A might be high for 10 ms
  - Phase B might be high for 5 ms
  - Phase C might be high for a shorter duration

However, it is important to note that the actual phase times are much shorter than these examples.

### Acceleration Boost

The Acceleration Boost feature allows for enhanced motor response by temporarily increasing the target current during acceleration. This is controlled via a 0-100% slider, which adjusts the boost intensity.

When the slider is set, the system requests a higher current for a short duration, effectively doubling the target current when the slider is at 100%. For instance, setting the slider to 50% increases the requested current to 150% of the original target. This temporary boost enables the motor to achieve quicker acceleration without permanently raising the current limit.

However, this technique results in increased electricity consumption as the system draws additional power during the acceleration phase. The necessary energy for this boost is sourced from the battery, leading to a higher overall power usage.

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

<!-- ![graph comparing the above mentioned field weakening setups](/images/comparison_graph.png) -->

<p align="center">
  <img src="images/comparison_graph.png" width="95%" alt="Field weakening graph">
</p>

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

<p align="center">
  <img src="images/current.gif" width="75%" alt="Ant bms gif showing current use ">
  <center>Example of what I_total of 42A actually looks on a flat road while requesting 30A torque, 30A flux.</center>
</p>

#### ADC modding info (G30 & ESx)

Special thanks to BXLR for providing valuable information on the R_adc logic.

[Open Calculator](https://lekrsu.github.io/shfw-walkthrough/calculator/)

**Note1**: Make sure to adjust R_adc, as it plays a significant role in ADC modding.
**Note2**: You can also measure your battery voltage and then increase the divider voltage until the system voltage reading matches your previous meassuring.
**Note3**: You only need to touch this setting once you changed the resistors on the esc. 

### License

This project is licensed under the [MIT License](LICENSE).

Please review the [LICENSE](LICENSE) file for detailed terms and conditions.

**Note**: The MIT License is applied to this project. While it allows for wide use and modification, it comes with no warranties or guarantees. The project contributors and maintainers are not responsible for any issues, damages, or liabilities that may arise from the use of this software.

### Author Information

This guide has been written by **lekrsu**, who can be reached on Discord with the tag `lekrsu` and on Telegram with the username `lekrsu`. You're welcome to send a pull request if you feel like the information needs correction.

<p class="hidden">This guide can be viewed in a prettier form <a href="https://lekrsu.github.io/shfw-walkthrough">here</a>.</p>
