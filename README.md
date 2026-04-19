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

1. Download our official app [Utility](https://utility-beta.cfw.sh/), alternatively for wide range device support, including iOS, check out [Luna](https://luna.cfw.sh/).

2. Supported Scooter Models:

      - **Ninebot G30, G30L**: You can flash this firmware if the DRV version is at 1.7.3 or below. If your DRV is 1.7.3, you need to select "Attempt Downgrade" before SHFW. For DRV versions above 1.7.3, you'll need an ST-Link. Refer to [this](https://joeybabcock.me/wiki/STLink_Ninebot_Max_ESC) for more information.

      - **Ninebot G2, F2, F2 Plus, F2 Pro**: Every regional model is compatible, needs to be unlocked via ST-Link.
  
      - **Ninebot ESx**: Every version is supported.
     
      - **Exx Series**: [Not E2, E2 Plus, E2 Pro. Only the older E22, E45, etc] You can flash SHFW if the DRV version is below 2.7.0. Else you will need to use a ST-Link.
  
      - **Ninebot F-Series**: [Older SHFW 0.3.6] You can flash this firmware if the DRV version is below 5.7.0. Else you will need to use a ST-Link. There are online guides available for this process. The app will prompt for updates even if there's none, be aware. Needs to flash with up to date Utility, then configured with [Utility 2.5](https://utility.cfw.sh/distrib/ScooterHackingUtility-2.5.apk). Do not enable brake boost.
  
      - **Ninebot D-Series**: [Currently not working] There is an experimental support for D-Series using the F-Series firmware. It's not known at which DRV version you will need a ST-Link. The guides should be identical to the F-Series.

   - **Xiaomi Scooters**: If the BLE version is at 1.5.5 or above, then you'll need to ST-Link downgrade the dashboard. [ST-Link Downgrade Guide](https://lekrsu.github.io/shfw-walkthrough/stlinking/xiaomi-ble). Attempt DRV downgrade via our app (ScooterHacking Utility) if flashing SHFW fails with a supported BLE version.

    [Reflasher](https://www.scooterhacking.org/forum/viewtopic.php?t=676), [Webflasher](https://flash.bastelpichi.de/) and [ScooterFlasher](https://github.com/scooterteam/scooterflasher) are programs used for ST-Linking, choose either one if it's needed. 

    | Model | Compatible BLE | Compatible DRV |
    |:--|:--|:--|
    |  | *ST-Link if incompatible* | *ST-Link if incompatible* |
    | Ninebot G30 | All | [Up to 1.7.3](https://joeybabcock.me/wiki/STLink_Ninebot_Max_ESC) |
    | Ninebot G2 | All | ST-Link |
    | Ninebot F2, F2 Plus, F2 Pro | All | ST-Link |
    | Xiaomi Essential, 1s, Pro 2, 3 | Below 1.5.5 | All |
    | Ninebot EsX | All | All |
    | Ex Series | All | Below 2.7.0 |
    | Ninebot E2, E2D, E2 Pro | N/A | N/A |
    | Ninebot F-Series | All | Below 5.7.0 |
    | Ninebot D-Series | All  | Experimental (F-Series firmware, unknown) |

3. Flash Procedure:

   - Open the utility app, connect to the scooter.
   - Press "Install/update SHFW" and select the version of the highest number, if there are multiple choices. Then, press flash. If it fails, and the above grid claims a supported version, try the "attempt drv downgrade" flash before SHFW.
      - If you have the newer Gen 3 G30 motor then select the new motor option under the motor config tab. This is automatic with original serial. If you don't know which one you have, compare the motor serial to this:

      | Motor Serial Number (SN) | Generation           | Models                               |
      |--------------------------|----------------------|--------------------------------------|
      | Starts with 6            | First Generation     | Most older models                    |
      | Starts with 9            | Second Generation    | G30Ps, some G30Lx models             |
      | Includes PCAH            | Third Generation     | G30P                                 |
      | Includes PAAH            | Third Generation     | G30E                                 |
      | Includes PADH/PADJ       | Third Generation     | G30D                                 |
      

### Usage

Please be aware that the information provided below is intended for practical use, but it should be used with caution. Field weakening will not be energy efficient.

#### [Ninebot G30](#ninebot-g30)

To achieve the top speed for Ninebot G30, follow these configurations:

1. Set sport DPC auto curve to 25A, 0.5 quadratic
   - Configure the other modes as desired, lower current than sport for less acceleration.
   - Keep the speed limit to off / 0.
   - Acceleration boost, 50%.
   - Brake boost, 0-50%, try it out.
   - Overmodulation on for sport/drive, efficient speed increase by 10%.

You can set eco and drive to lower values, e.g. 10A eco, 25A drive. Drive will use less current since we won't enable field weakening.

2. Go to the field weakening tab and enable field weakening for sport mode:

   ### Normal use:
   - Configure as follows:
     - Speed: 20 km/h
     - Initial: 0A
     - Variable: 1200

   ### Higher efficiency, less field weakening:
   - Configure as follows:
     - Speed: 20 km/h
     - Initial: 0A
     - Variable: 600

4. Default tire size for Max models are 10", but set 9.4" on G30 to get the dash speed to match GPS speed.

5. Under Motor Settings, select 20 or 24khz.

#### [Ninebot G2, F2](#ninebot-g2-f2)

To achieve the top speed for G2 and F2, follow these configurations:

1. Set sport DPC auto curve to 25A, 0.5 quadratic
   - Configure the other modes as desired, lower current than sport for less acceleration.
   - Keep the speed limit to off / 0.
   - Acceleration boost, 50%. 

You can set eco and drive to lower values, e.g. 10A eco, 25A drive. Drive will use less current since we won't enable field weakening.

2. Go to the field weakening tab and enable field weakening for sport mode:

   ### Normal use:
   - Configure as follows:
     - Speed: 20 km/h
     - Initial: 0A
     - Variable: 1200

   ### Higher efficiency, less field weakening:
   - Configure as follows:
     - Speed: 20 km/h
     - Initial: 0A
     - Variable: 600

#### [Xiaomi Pro 2](#xiaomi-pro-2)

   1. Sport mode, DPC, auto curve 30A, half quadratic (0.5):
      - Acceleration boost set to 100%.
      - Brake boost set to 100%.
      - Overmodulation on for sport/drive.

You can set eco and drive to lower values, e.g. 10A eco, 20A drive. Drive will use less current since we won't enable field weakening.

2. Go to the field weakening tab and:
   - Enable field weakening for sport mode.
   - Configure as follows: 20 km/h, 0A, 1500.

4. Under Motor Settings, select 20khz.

#### [Xiaomi Mi 3](#xiaomi-mi-3)

1. Sport mode, DPC, auto curve 20A, half quadratic (0.5):
    - Acceleration boost set to 90%. If the vehicle turns off, decrease this.
    - Brake boost set to 100%.
    - Overmodulation on for sport/drive

You can set eco and drive to lower values, e.g. 10A eco, 20A drive. Drive will use less current since we won't enable field weakening.

2. Go to the field weakening tab and:
   - Enable field weakening for sport mode.
   - Configure as follows: 20 km/h, 0A, 1500.

4. Under Motor Settings, select 20khz.

#### [Xiaomi Essential, Lite, 1S](#xiaomi-essential-lite-1s)

For Xiaomi Essential & 1S, use these configurations:

1. Sport mode, DPC, 18A, fully quadratic (1.0).
   - Acceleration boost set to 50%.
   - Brake set to 30A, flat (0.0).
   - Overmodulation on for sport/drive.

You can set eco and drive to lower values, e.g. 10A eco, 18A drive. Drive will use less current since we won't enable field weakening.
  
2. Go to the field weakening tab and:

   - Enable field weakening for sport mode.
   - Configure as follows: 15 km/h, 0A, 1500.

4. Under Motor Settings, select 20.

#### [Ninebot EsX, Ex](#ninebot-esx-ex)

For Ninebot EsX, Ex, use these configurations:

   - Enable "expert view" on the top right.

1. Sport mode, DPC, 18A, fully quadratic (1.0).
   - Acceleration boost, 50%.
   - Brake, 45A flat (0.0)
   - Overmodulation on for sport/drive

You can set eco and drive to lower values, e.g. 10A eco, 18A drive. Drive will use less current since we won't enable field weakening.
  
2. Go to the field weakening tab and:
   - Enable field weakening for sport mode.
   - Configure as follows: 15 km/h, 0A, 1500.

4. Under Motor Settings, select 20khz.

#### ADC modding info (G30)

[Open Calculator](https://lekrsu.github.io/shfw-walkthrough/calculator/)

You only need to touch this setting once you changed the resistors on the esc. 

### License

This project is licensed under the [MIT License](LICENSE).

Please review the [LICENSE](LICENSE) file for detailed terms and conditions.

**Note**: The MIT License is applied to this project. While it allows for wide use and modification, it comes with no warranties or guarantees. The project contributors and maintainers are not responsible for any issues, damages, or liabilities that may arise from the use of this software.

### Author Information

This guide has been written by **lekrsu**, who can be reached on Discord with the tag `lekrsu` and on Telegram with the username `lekrsu`. You're welcome to send a pull request if you feel like the information needs correction.

<p class="hidden">This guide can be viewed in a prettier form <a href="https://lekrsu.github.io/shfw-walkthrough">here</a>.</p>
