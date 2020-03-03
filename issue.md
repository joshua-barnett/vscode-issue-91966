<!-- Please read our Rules of Conduct: https://opensource.microsoft.com/codeofconduct/ -->
<!-- Please search existing issues to avoid creating duplicates. -->
<!-- Also please test using the latest insiders build to make sure your issue has not already been fixed: https://code.visualstudio.com/insiders/ -->

<!-- Use Help > Report Issue to prefill these. -->
- VSCode Version:
  ```
  Version: 1.42.1
  Commit: c47d83b293181d9be64f27ff093689e8e7aed054
  Date: 2020-02-11T14:44:27.652Z
  Electron: 6.1.6
  Chrome: 76.0.3809.146
  Node.js: 12.4.0
  V8: 7.6.303.31-electron.0
  OS: Darwin x64 17.7.0
  ```
- OS Version:
  ```
  Reproduced on:
  - macOS High Sierra 10.13.6 (17G7024)
  - Ubuntu 18.04.3 LTS
  ```

Steps to Reproduce:

1. Clone this repository.
  ```shell
  $ git@github.com:synthecypher/vscode-issue-91966.git
  ```
2. Open repository in VSCode.
  ```shell
  $ code vscode-issue-91966
  ```
3. Open file `app.js`
4. Run and debug _*Debug: Selected File*_
5. Observe _*Docker*_ starting the container and VSCode attaching to the _*Node.js*_ process.
6. Wait for the debugger to disconnect and reconnect.
7. Wait for the breakpoint on the first like of the `main` function.
8. Hit the stop button on the debugger toolbar.
9. Observe the desktop environment and all processes crash.
  ```
  # system.log
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.mdworker.bundles[14881]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.divisiblebyzero.Spectacle.2432[14806]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.talagent[14340]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.CoreSimulator.CoreSimulatorService[14339]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.applespell[14141]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.helpd[12849]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.DictionaryServiceHelper[12781]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.assistantd[12651]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.pboard[11936]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.knowledge-agent[12023]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.CallHistoryPluginHelper[12014]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.pbs[12004]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.suggestd[12022]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.CoreLocationAgent[12001]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.videosubscriptionsd[12002]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.ContactsAgent[12012]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.ReportCrash[14341]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.xpc.loginitemregisterd[14790]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.keyboardservicesd[14142]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.swcd[12652]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.mdworker.shared.00000000-0000-0000-0000-000000000000[12021]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.photoanalysisd[12016]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.apfsuseragent[12013]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.cache_delete[12003]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.screensharing.menuextra[11994]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.akd[12006]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.Safari.History[12025]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.usernoted[11949]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.iCloudHelper[11993]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.mdworker.shared.04000000-0000-0000-0000-000000000000[11997]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.mdworker.shared.01000000-0000-0000-0000-000000000000[11996]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.CalendarAgent[12009]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.nsurlstoraged[11991]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.protectedcloudstorage.protectedcloudkeysyncing[11989]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.icloud.fmfd[11988]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.rapportd[11987]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.iconservices.iconservicesagent[11985]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.dock.extra[12010]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.AddressBook.ContactsAccountsService[11983]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.nsurlsessiond[11982]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.coreservices.sharedfilelistd[11963]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.fontd[11962]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.trustd.agent[11958]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.pluginkit.pkd[11959]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.cfprefsd.xpc.agent[11955]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.icdd[11940]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.imklaunchagent[11929]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.secinitd[11951]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.corespeechd[11941]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.noticeboard.agent[11948]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.coreservices.uiagent[12295]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.bjango.istatmenus.agent[11934]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.cloudpaird[11928]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.mdworker.single.03000000-0000-0000-0000-000000000000[12000]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.mdworker.shared.02000000-0000-0000-0000-000000000000[11999]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.networkserviceproxy[12008]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.mdworker.shared.03000000-0000-0000-0000-000000000000[11998]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.routined[11932]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.PressAndHold[11995]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.identityservicesd[11935]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.cdpd[11986]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.CommCenter[11952]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.security.cloudkeychainproxy3[11984]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.geod[11981]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.printuitool.agent[11979]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.CalendarNotification.CalNCService[12011]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.accountsd[11976]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.soagent[11930]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.storeaccountd[11973]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.tccd[11967]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.UserEventAgent-Aqua[11943]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.imdpersistence.IMDPersistenceAgent[11974]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.distnoted.xpc.agent[11956]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.lsd[11960]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.sharingd[11950]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.notificationcenterui.agent[11942]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.wifi.WiFiAgent[11937]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.imagent[11939]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.passd[11961]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.telephonyutilities.callservicesd[11975]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.cloudd[11977]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.coreservices.useractivityd[11990]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.AirPlayUIAgent[11944]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.commerce[11980]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.diagnostics_agent[11938]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac diagnosticd[4391]: System mode client stopped - Console (14338) - clearing mode: 0xa, still active: 0x0
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.SystemUIServer.agent[11957]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.secd[11972]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.bjango.istatmenus.status[11953]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.docker.docker.14496[14767]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.Dock.agent[11933]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.Finder[11945]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.Console.2536[14338]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac com.apple.xpc.launchd[1] (com.apple.Spotlight[11946]): Service exited due to signal: Interrupt: 2 sent by Code Helper (Renderer)[14879]
  Mar  3 17:06:00 mymac Spotlight[14906]: objc[14906]: Class SPWebHistoryResult is implemented in both /System/Library/PrivateFrameworks/Spotlight.framework/Versions/A/Spotlight (0x7fff93338308) and /System/Library/CoreServices/Spotlight.app/Contents/MacOS/Spotlight (0x1088e6ac8). One of the two will be used. Which one is undefined.
  Mar  3 17:06:00 mymac Spotlight[14906]: objc[14906]: Class SPWebHistoryQuery is implemented in both /System/Library/PrivateFrameworks/Spotlight.framework/Versions/A/Spotlight (0x7fff933382e0) and /System/Library/CoreServices/Spotlight.app/Contents/MacOS/Spotlight (0x1088e6b18). One of the two will be used. Which one is undefined.
  Mar  3 17:06:00 mymac Spotlight[14906]: objc[14906]: Class SPDefaults is implemented in both /System/Library/PrivateFrameworks/Spotlight.framework/Versions/A/Spotlight (0x7fff93337f98) and /System/Library/CoreServices/Spotlight.app/Contents/MacOS/Spotlight (0x1088e6e60). One of the two will be used. Which one is undefined.
  Mar  3 17:06:00 mymac Spotlight[14906]: objc[14906]: Class SPShortcutPattern is implemented in both /System/Library/PrivateFrameworks/Spotlight.framework/Versions/A/Spotlight (0x7fff93338b28) and /System/Library/CoreServices/Spotlight.app/Contents/MacOS/Spotlight (0x1088e7130). One of the two will be used. Which one is undefined.
  Mar  3 17:06:00 mymac Spotlight[14906]: objc[14906]: Class SPAppDefaults is implemented in both /System/Library/PrivateFrameworks/Spotlight.framework/Versions/A/Spotlight (0x7fff93337ea8) and /System/Library/CoreServices/Spotlight.app/Contents/MacOS/Spotlight (0x1088e73b0). One of the two will be used. Which one is undefined.
  Mar  3 17:06:00 mymac cfprefsd[14908]: BUG in libdispatch client: kevent[mach_recv] monitored resource vanished before the source cancel handler was invoked
  Mar  3 17:06:00 mymac CommCenter[14909]: objc[14909]: Class CTAsciiAddress is implemented in both /System/Library/Frameworks/CoreTelephony.framework/Versions/A/CoreTelephony (0x7fff8de87ab8) and /System/Library/Frameworks/CoreTelephony.framework/Support/CommCenter (0x1058d3b70). One of the two will be used. Which one is undefined.
  Mar  3 17:06:00 mymac CommCenter[14909]: objc[14909]: Class CTPhoneNumber is implemented in both /System/Library/Frameworks/CoreTelephony.framework/Versions/A/CoreTelephony (0x7fff8de87b58) and /System/Library/Frameworks/CoreTelephony.framework/Support/CommCenter (0x1058d3d00). One of the two will be used. Which one is undefined.
  Mar  3 17:06:01 mymac Finder[14904]: assertion failed: 17G7024: libxpc.dylib + 75013 [7B82608D-ED82-35C1-B13F-99855E25D6DC]: 0x89
  Mar  3 17:06:01 mymac com.apple.xpc.launchd[1] (com.apple.imfoundation.IMRemoteURLConnectionAgent): Unknown key for integer: _DirtyJetsamMemoryLimit
  Mar  3 17:06:01 mymac secd[14925]: objc[14925]: Class SecSOSStatus is implemented in both /System/Library/Frameworks/Security.framework/Versions/A/Security (0x7fff8f3d6df8) and /usr/libexec/secd (0x10ec41850). One of the two will be used. Which one is undefined.
  Mar  3 17:06:01 mymac com.apple.xpc.launchd[1] (com.apple.imfoundation.IMRemoteURLConnectionAgent): Unknown key for integer: _DirtyJetsamMemoryLimit
  Mar  3 17:06:01 --- last message repeated 1 time ---
  Mar  3 17:06:01 mymac Finder[14904]: objc[14904]: Class FIFinderSyncExtensionHost is implemented in both /System/Library/CoreServices/Finder.app/Contents/MacOS/Finder (0x106a6fe18) and /System/Library/PrivateFrameworks/FileProvider.framework/OverrideBundles/FinderSyncCollaborationFileProviderOverride.bundle/Contents/MacOS/FinderSyncCollaborationFileProviderOverride (0x106f47cd8). One of the two will be used. Which one is undefined.
  Mar  3 17:06:01 mymac com.apple.xpc.launchd[1] (com.apple.imfoundation.IMRemoteURLConnectionAgent): Unknown key for integer: _DirtyJetsamMemoryLimit
  Mar  3 17:06:02 --- last message repeated 5 times ---
  Mar  3 17:06:01 mymac com.apple.xpc.launchd[1] (com.apple.quicklook[14949]): Endpoint has been activated through legacy launch(3) APIs. Please switch to XPC or bootstrap_check_in(): com.apple.quicklook
  Mar  3 17:06:02 mymac com.apple.xpc.launchd[1] (com.apple.imfoundation.IMRemoteURLConnectionAgent): Unknown key for integer: _DirtyJetsamMemoryLimit
  Mar  3 17:06:02 --- last message repeated 2 times ---
  Mar  3 17:06:02 mymac UserEventAgent[14900]: objc[14900]: Class NPUtilities is implemented in both /System/Library/PrivateFrameworks/NetworkServiceProxy.framework/Versions/A/NetworkServiceProxy (0x7fff91d18fd0) and /System/Library/UserEventPlugins/com.apple.netsvcproxy.plugin/Contents/MacOS/com.apple.netsvcproxy (0x103598768). One of the two will be used. Which one is undefined.
  Mar  3 17:06:02 mymac UserEventAgent[14900]: objc[14900]: Class NSPConnectionInfo is implemented in both /System/Library/PrivateFrameworks/NetworkServiceProxy.framework/Versions/A/NetworkServiceProxy (0x7fff91d19098) and /System/Library/UserEventPlugins/com.apple.netsvcproxy.plugin/Contents/MacOS/com.apple.netsvcproxy (0x103598858). One of the two will be used. Which one is undefined.
  Mar  3 17:06:02 mymac com.apple.xpc.launchd[1] (com.apple.CoreLocationAgent[14956]): Endpoint has been activated through legacy launch(3) APIs. Please switch to XPC or bootstrap_check_in(): com.apple.CoreLocation.agent
  Mar  3 17:06:02 mymac com.apple.xpc.launchd[1] (com.apple.imfoundation.IMRemoteURLConnectionAgent): Unknown key for integer: _DirtyJetsamMemoryLimit
  Mar  3 17:06:02 mymac networkserviceproxy[14959]: objc[14959]: Class NSPFlowDivert is implemented in both /System/Library/PrivateFrameworks/NetworkServiceProxy.framework/Versions/A/NetworkServiceProxy (0x7fff91d19160) and /usr/libexec/networkserviceproxy (0x106a938f0). One of the two will be used. Which one is undefined.
  Mar  3 17:06:02 mymac com.apple.xpc.launchd[1] (com.apple.imfoundation.IMRemoteURLConnectionAgent): Unknown key for integer: _DirtyJetsamMemoryLimit
  Mar  3 17:06:05 --- last message repeated 4 times ---
  Mar  3 17:06:05 mymac parsecd[14924]: libcoreservices: _dirhelper: 666: mkdir: path=/var/folders/zj/9ckbn8sd6pgf14db2z8cgcl40000gn/0/com.apple.parsecd/ modes[0]=0755: Operation not permitted
  Mar  3 17:06:06 mymac com.apple.xpc.launchd[1] (com.apple.xpc.launchd.domain.user.501): Attempt to re-bootstrap service from different path, will use existing: service = com.apple.Safari.History, existing = /System/Library/PrivateFrameworks/SafariShared.framework/Versions/A/XPCServices/com.apple.Safari.History.xpc, conflicting = /System/Library/StagedFrameworks/Safari/SafariShared.framework/Versions/A/XPCServices/com.apple.Safari.History.xpc
  Mar  3 17:06:06 mymac Spotlight[14906]: assertion failed: 17G7024: libxpc.dylib + 75013 [7B82608D-ED82-35C1-B13F-99855E25D6DC]: 0x89
  Mar  3 17:06:09 mymac diagnosticd[4391]: System mode client started - Console (15258) - mode: 0xb
  Mar  3 17:06:11 mymac Console[15258]: BUG in libdispatch client: kevent[vnode] monitored resource vanished before the source cancel handler was invoked
  Mar  3 17:06:11 mymac com.apple.xpc.launchd[1] (com.apple.imfoundation.IMRemoteURLConnectionAgent): Unknown key for integer: _DirtyJetsamMemoryLimit
  Mar  3 17:06:18 mymac CalendarAgent[14957]: BUG in libdispatch client: dispatch_mig_server: mach_msg() failed (ipc/send) msg too small - 0x10000008
  Mar  3 17:06:24 mymac parsecd[14924]: BUG in libdispatch client: dispatch_mig_server: mach_msg() failed (ipc/send) msg too small - 0x10000008
  ```

<!-- Launch with `code --disable-extensions` to check. -->
Does this issue occur when all extensions are disabled?: Yes
