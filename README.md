# Quick SHFW Configuration Walkthrough

SHFW is a custom firmware available for flashing via the Scooterhacking Utility app. Configuring it might be challenging for new users. This guide aims to provide a quick and easy way to apply the important basics. The understanding aspect of all this can be overwhelming, but it will come as a side effect of your own testing and thinking as we can't do that for you.

Join the English discussions on [Telegram](https://t.me/scooterhackingchat) and [Discord](https://scooterhack.in/discord), or the German [Discord](https://discord.gg/QgRwYEKn8k).
<p align="left">
  <a href="https://discord.gg/scooterhacking" target="_blank">
    <img src="https://dcbadge.limes.pink/api/server/https://discord.gg/scooterhacking"/>
  </a>
  <a href="https://discord.gg/QgRwYEKn8k" target="_blank">
    <img src="https://dcbadge.limes.pink/api/server/https://discord.gg/QgRwYEKn8k"/>
  </a>
</p>

### Installation

To install SHFW, follow these steps:

1. Download our official app [Utility](https://utility.cfw.sh/), alternatively for legacy support check out [Luna](https://luna.cfw.sh/).

2. Supported Scooter Models:

      - **Ninebot G30, G30L**: You can flash this firmware if the DRV version is at 1.7.3 or below. If your DRV is 1.7.3, you need to select "Attempt Downgrade" in Utility 2.7 before SHFW. For DRV versions above 1.7.3, you'll need an ST-Link. Refer to [this](https://joeybabcock.me/wiki/STLink_Ninebot_Max_ESC) for more information.

      - **Ninebot G2, F2, F2 Plus, F2 Pro**: Every model is compatible but needs to be unlocked via ST-Link.
  
      - **Ninebot ESx**: Every version is supported.
     
      - **Exx Series**: [Not E2, E2 Plus, E2 Pro. Only the older E22, E45, etc] You can flash SHFW if the DRV version is below 2.7.0. Else you will need to use a ST-Link.
  
      - **Ninebot F-Series**: [Older SHFW 0.3.6] You can flash this firmware if the DRV version is below 5.7.0. Else you will need to use a ST-Link. There are online guides available for this process. The app will prompt for updates even if there's none, be aware. Needs to flash with up to date Utility, then configured with [Utility 2.5](https://utility.cfw.sh/distrib/ScooterHackingUtility-2.5.apk). Do not enable brake boost.
  
      - **Ninebot D-Series**: [Currently not working] There is an experimental support for D-Series using the F-Series firmware. It's not known at which DRV version you will need a ST-Link. The guides should be identical to the F-Series.

   - **Xiaomi Scooters**: If the BLE version is at 1.5.5 or above, then you'll need to ST-Link downgrade the dashboard. [ST-Link Downgrade Guide](https://lekrsu.github.io/shfw-walkthrough/stlinking/xiaomi-ble). Attempt DRV downgrade via our app (ScooterHacking Utility) if flashing SHFW fails with a supported BLE version.

    | Model | Compatible BLE | Compatible DRV | 
    |:--|:--|:--|
    |  | *ST-Link if incompatible* | *ST-Link if incompatible* |
    | Ninebot G30 | All | [Up to 1.7.3](https://joeybabcock.me/wiki/STLink_Ninebot_Max_ESC) |
    | Ninebot G2 | All | ST-Link |
    | Ninebot F2, F2 Plus, F2 Pro | All | ST-Link |
    | Xiaomi Essential, 1s, Pro 2, 3 | Below 1.5.5 | All |
    | Ninebot ESx | All | All |
    | Ex Series | All | Below 2.7.0 |
    | Ninebot E2, E2 Plus, E2 Pro | N/A | N/A |
    | Ninebot F-Series (not maintained)| All | Below 5.7.0 |
    | Ninebot D-Series (not maintained)| All  | N/A |

    For the models above; [Reflasher](https://www.scooterhacking.org/forum/viewtopic.php?t=676), [Webflasher](https://flash.bastelpichi.de/) and [ScooterFlasher](https://github.com/scooterteam/scooterflasher) are programs used for ST-Linking, choose either one if it's needed. Webflasher has native F2 AT32 support, for GD32 see the [English Discord pin](https://discord.com/channels/550154171433615364/577551709057056768/1520409282762248324) for details.
  
    | Model | VCU | MCU | BLE | BMS | Notes |
    |:--|:--|:--|:--|:--|:--|
    | Ninebot G3, F3, GT3 | ST-Link | ST-Link | All | All | Flash unlock supported, regional unlock without flashing |
    | Ninebot ZT3 Pro | ST-Link | ST-Link | All | All | Flash unlock supported |
    | Ninebot E3, E3 Pro | ST-Link | ST-Link | All | All | No flash unlock |
  
    VCU is what restricts against region change. Models above are not SHFW compatible; however, most are compatible with patched firmware allowing regional features and unrestricted flashing, see the column above for exceptions (E3 and E3 Pro do not support flash unlock). [x3utils](https://github.com/ztakis/x3utils) is a ST-LINK utility for X3 / 3rd-generation scooters.

3. Flash Procedure:

   - Open the utility app, connect to the scooter.
   - Press "Install/update SHFW" and select the highest available version number, if there are multiple choices.
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

1. Set sport DPC auto curve to 30A. Reduce if system shuts off.
   - Configure the other modes as desired, lower current than sport for less acceleration.
   - Keep the speed limit to off / 0.
   - Acceleration boost, adjust by feel. Reduce if system shuts off.
   - Brake curve, increase if weak. 30A is moderate.
   - Brake boost, adjust by feel.
   - Overmodulation on for sport/drive, efficient speed increase by 10% or less.
   - Keep Iq and Id default limits and enable automatic field weakening for sport mode.

2. You can set eco and drive to lower values, e.g. 10A eco, 30A drive. Drive will use less current since we won't enable field weakening.

3. Default tire size for Max models are 10", but set 9.4" on G30 to get the dash speed to closer match GPS speed.

#### [Ninebot G2, F2, F2 Plus, F2 Pro](#ninebot-g2-f2)

1. Set sport DPC auto curve to 30A. Reduce if system shuts off.
   - Configure the other modes as desired, lower current than sport for less acceleration.
   - Keep the speed limit to off / 0.
   - Acceleration boost, adjust by feel. Reduce if system shuts off.
   - Brake curve, increase if weak. 30A is moderate.
   - Brake boost, adjust by feel.
   - Keep Iq and Id default limits and enable automatic field weakening for sport mode.

2. You can set eco and drive to lower values, e.g. 10A eco, 30A drive. Drive will use less current since we won't enable field weakening.

#### [Xiaomi Pro 2](#xiaomi-pro-2)

1. Set sport DPC auto curve to 30A. Reduce if system shuts off.
   - Configure the other modes as desired, lower current than sport for less acceleration.
   - Keep the speed limit to off / 0.
   - Acceleration boost, adjust by feel. Reduce if system shuts off.
   - Brake curve, increase if weak. 58A is stock.
   - Brake boost, adjust by feel.
   - Overmodulation on for sport/drive, efficient speed increase by 10% or less.
   - Keep Iq and Id default limits and enable automatic field weakening for sport mode.

2. You can set eco and drive to lower values, e.g. 10A eco, 30A drive. Drive will use less current since we won't enable field weakening.

#### [Xiaomi Mi 3, 1S](#xiaomi-mi-3-1s)

1. Set sport DPC auto curve to 20A. Reduce if system shuts off.
   - Configure the other modes as desired, lower current than sport for less acceleration.
   - Keep the speed limit to off / 0.
   - Acceleration boost, adjust by feel. Reduce if system shuts off.
   - Brake curve, increase if weak. 58A is stock.
   - Brake boost, adjust by feel.
   - Overmodulation on for sport/drive, efficient speed increase by 10% or less.
   - Keep Iq and Id default limits and enable automatic field weakening for sport mode.

2. You can set eco and drive to lower values, e.g. 10A eco, 20A drive. Drive will use less current since we won't enable field weakening.

#### [Xiaomi Essential, Lite](#xiaomi-essential-lite)

For Xiaomi Essential/Lite, use these configurations:

1. Set sport DPC auto curve to 18A. Reduce if system shuts off.
   - Configure the other modes as desired, lower current than sport for less acceleration.
   - Keep the speed limit to off / 0.
   - Acceleration boost, adjust by feel. Reduce if system shuts off.
   - Brake curve, increase if weak. 58A is stock.
   - Brake boost, adjust by feel.
   - Overmodulation on for sport/drive, efficient speed increase by 10% or less.
   - Keep Iq and Id default limits and enable automatic field weakening for sport mode.

2. You can set eco and drive to lower values, e.g. 10A eco, 18A drive. Drive will use less current since we won't enable field weakening.

#### [Ninebot ESx, Ex](#ninebot-esx-ex)

For Ninebot EsX, Ex, use these configurations:

   - Enable "expert view" on the top right.

1. Sport mode, DPC, 18A
   - Acceleration boost, 50%.
   - Brake, 45A
   - Overmodulation on for sport/drive

2. You can set eco and drive to lower values, e.g. 10A eco, 18A drive. Drive will use less current since we won't enable field weakening.
  
3. Go to the field weakening tab and:
   - Enable field weakening for sport mode.
   - Configure as follows: 15 km/h, 0A, 1500.

#### ADC modding calculation (G30)

[Open Calculator](https://lekrsu.github.io/shfw-walkthrough/calculator/)

You only need to touch this setting once you changed the resistors on the esc. 

### License

This project is licensed under the [MIT License](LICENSE).

Please review the [LICENSE](LICENSE) file for detailed terms and conditions.

**Note**: The MIT License is applied to this project. While it allows for wide use and modification, it comes with no warranties or guarantees. The project contributors and maintainers are not responsible for any issues, damages, or liabilities that may arise from the use of this software.

### Author Information

This guide has been written by **lekrsu**, who can be reached on Discord with the tag `lekrsu` and on Telegram with the username `lekrsu`. You're welcome to send a pull request if you feel like the information needs correction.

<p class="hidden">This guide can be viewed in a prettier form <a href="https://lekrsu.github.io/shfw-walkthrough">here</a>.</p>
