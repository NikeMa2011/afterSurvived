const gameObject = {
    scene: {
        wall: {},
        floor: {}
    },
    entity: {
        player: {},
        container: {
            airDrop: {},
            cashier: {},
            drawer: {},
            grenadeBox: {},
            clouth: {},
            medicBag: {},
            medicBox: {},
            medicStorgeBox: {},
            computerCase: {},
            suitCase: {},
            travelBag: {},
            supplyStorgeBox: {},
            safeBox: {},
            toolBox: {},
            woodenBox: {},
            militaryBox: {},
            militaryCrate: {},
            militaryCase: {},
            ammoBox: {},
        }
    },
    item: {
        weapon: {
            rifle: {
                assault: {
                    AKM: {},
                    AK_74N: {},
                    AKS_74UN: {},
                    AK_74M: {},
                    AK_12: {},
                    AsVal: {},
                    OTs_14: {},

                    M16A1: {},
                    M16A4: {},
                    M4A1: {},
                    SCAR_L: {},
                    SCAR_H: {},
                    XM7: {},

                    G36: {},
                    G3: {},

                    famas: {},

                    AUG: {},

                    L85A3: {},

                    type_81: {},
                    QBZ_95_1: {},
                    QBZ_95_1B: {},
                    QBZ_191: {},
                    QBZ_192: {}
                },
                carbine: {
                    SKS: {},
                    SVT_40: {},

                    M1A: {},

                    type_63: {}
                },
                sniper: {
                    mosinNagant: {},
                    SVD: {},
                    SV_98: {},
                    VSS: {},

                    M700: {},
                    M24A3: {},
                    Mk_14: {},

                    QBU_88: {},
                    QBU_203: {},
                    QBU_191: {}
                },
                subMachineGun: {
                    MP5: {},
                    UMP_45: {},
                    MP7A2: {},

                    MP9: {},
                    MPX: {},

                    UZI: {},

                    PP_19_01: {},
                    PP_91: {},
                    AK_9: {},
                    PPSh_41: {},
                    PPS_43: {},

                    type_79: {},
                    type_85: {},
                    QCQ_171: {},
                    QCQ_05: {},

                    M3A1: {}
                },
                machineGun: {
                    M60: {},
                    M249: {},

                    PKM: {},
                    RPK_16: {},

                    QJB_95: {},
                    QJY_201: {},

                    MG3: {}
                },
                shotGun: {
                    AA_12: {},
                    M870: {},

                    TOZ_106: {},
                    KS_23: {},
                    S12K: {},

                    doubleBarreled: {},

                    QBS_09: {}
                }
            },
            pistol: {
                TT_33: {},
                PM: {},
                MP_443: {},

                FN_57: {},

                G17: {},
                G18C: {},

                M9A3: {},
                M1911A1: {},

                USP_45: {},

                type92G: {},
                type_92_58mm: {}
            },
            melee: {
                corssBar: {},
                QNL_95: {},
                M9: {},
                mutiFunctionShovel: {}
            },
            throw: {
                RGD_5: {},
                RGO: {},
                F_1: {},

                Mk_2: {},
                M67: {},
                M26: {},
                M18: {},

                type_86: {},

                molotovCocktail: {},
            }
        },
        ammo: {
            caliber_545x39_7N6: {},
            caliber_545x39_7N22: {},
            caliber_545x39_7N24: {},
            caliber_545x39_7N39: {},

            caliber_9x18_FMJ: {},

            caliber_762x39_M43: {},
            caliber_762x39_M67: {},
            caliber_762x25_P: {},
            caliber_762x25_Pst: {},

            caliber_9x19_FMJ: {},

            caliber_556x45_M885: {},
            caliber_556x45_M885A1: {},
            caliber_556x45_M995AP: {},

            caliber_58x42_DBP10: {},
            caliber_58x42_DBP191: {},

            caliber_58x21_AP: {},

            caliber_9x39_SP5: {},
            caliber_9x39_SP6: {},

            caliber_762x54_7N1: {},
            caliber_762x54_7N14: {},

            caliber_762x51_M59: {},
            caliebr_762x51_M993: {},

            caliber_12Gauge: {},

            caliber_45ACP_FMJ: {},
            caliber_45ACP_JHP: {},

            caliber_57x28_SS190: {},
            caliber_57x28_SS195LF: {},

            caliebr_46x30: {},
            caliber_46x30_DM11: {},

            caliber_127x99_M2: {},
            caliber_127x99_M33: {},
            caliber_127x108_7N34: {},

            caliber_30_06_M2: {},

            caliber_338_SP: {},

            caliber_30x165_AP: {},
            caliber_25x137_M793: {},
            caliber_20x102_HE: {},
            caliber_145x114: {},
            caliber_125_3BM42: {},
        },
        magazine: {
            AKseries_545x39_30: {},
            PM_9x18_8: {}
        },
        medical: {
            bandage: {
                bandage_yunNanBaiYao: {},
                bandage_3M: {},
                amryBandage: {}
            },
            disinfect: {
                saline: {},
                medical75percentAlcohol: {},
                iodophor: {},
                hydrogenPeroxide: {}
            },
            surgery: {
                surgeryForcep: {},
                safeScissor: {},
                skinstitcher: {}
            },
            painkill: {
                ibuprofen: {},
                aspirin: {},
                morphine: {},

                fengYouJin: {},
                goldStar: {},
            },
            medicine: {
                antibiotics: {},
                coughSyrup: {}
            },
            inject: {
                epinephrine: {},
                caffeine: {}
            },
            tourniquet: {
                tourniquet: {}
            },
            splint: {
                splint: {}
            },
            other: {
                waterPurificationTablet: {},
                vitamin: {},
                syringe: {},
                bloodImportTool: {}
            }
        },
        food: {
            drink: {
                cococola: {},
                pepsi: {},
                sprite: {},
                fanta: {},

                nongFuSpring: {},
                baiSuiShan: {},

                pocari: {},
                monster: {},
                redbull: {},

                mirinda: {},
                milk: {},

                qingDaoBeer: {},
                whisky: {},
                vodka: {},
            },
            eat: {
                snickers: {},
                ham: {},
                sausage: {},

                doveChocolate: {},
                boxOfSugar: {},
                candy: {},
                bread: {},
                crackers: {},

                baBaoGruel: {},
                douChiFishCan: {},
                yellowPeachCan: {},
                lunchMeatCAn: {},
                porkCan: {},
                peaCan: {},
                beefCan: {},

                MRE: {},
                iskra: {},
                type_20: {},
            }
        },
        electronic: {
            graphicCard: {},
            CPU: {},
            mainBoard: {},
            RAM: {},
            HDD: {},
            SSD: {},
            CD: {},
            USBdrive: {},
            CDdrive: {},
            fan: {},

            wire: {},
            cable: {},
            capacitor: {},
            relay: {},

            PCB: {},
            microcontroller: {},

            LCD: {},
            touchBorad: {},

            laptop: {},
            earPhone: {},
            headPhone: {},
            watch: {},
            phone: {},
            laptop: {},
            tablet: {}
        },
        mechanic: {
            wrench: {},
            screwDriver: {},
            pilers: {},
            forcep: {},
            motor: {},
            industrialMotor: {},
            electricDriller: {},
            airFilter: {},
            waterFilter: {},
            hammer: {},

            thermometer: {},
            spiritLevel: {},
            barometer: {},
            WD_40: {},
            energySafeLamp: {},
            UVlamp: {},
            blub: {},
            gunLube: {},
            spark: {}
        },
        material: {
            magnet: {},
            screw: {},
            bolt: {},
            glue: {},
            tape_transparent: {},
            tape_3M: {},
            nut: {},
            rope: {},
            nail: {},
            PVCtube: {},
            rubberTube: {},
            metalTube: {},
            gunPower: {},
            fabric: {},
            matelSheet: {}
        },
        fuel: {
            matches: {},
            lighter: {},
            LPGtank: {},
            gasBottle: {},
            solidAhcohol: {}
        },
        power: {
            cylinderBattery: {},
            carBattery: {},

            charger: {},
            powerBank: {},
            PSU: {},
        },
        houseHold: {
            toothpaste: {},
            bleach: {},
            salt: {},
            cleaner: {},
            soap: {},
            paper: {},
            cigarette: {}
        },
        intelligence: {

        },
        keys: {

        },
        other: {
            bogTag: {},
            compass: {}
        },
        valuable: {
            silverNecklace: {},
            goldNecklace: {},
            badge: {},
            ring: {},
            silverBracelet: {},
            goldBraceLet: {},
            jadeBraceLet: {},
            rolex: {},
            physicalBitcoin: {},
            zippo: {}
        },

        chest: {
            armor: {
                MTV: {},
            },
            chestRig: {
                armor: {
                    _6B45: {}
                },
                vest: {
                    type_56: {},
                    type_81: {},
                    type_95: {},

                    _6B46: {},
                    _6Sh117: {},
                }
            },
        },
        head: {
            helmet: {
                SSh_68: {},
                _6B47: {},
                altyn: {},

                M1: {},
                PASGT: {},
                ACH: {},
                LWH: {},
                FAST: {},
                EXFIL: {},

                QGF_02: {},
                QGF_03: {},
                QGF_11: {},
                W_15: {},

                MK_7: {},
            },
            hat: {
                cottonHat: {},
                baseBallCap: {},
                woolHat: {},
                boonleHat: {},
                beretHat: {},
                camouflageHat: {}
            },
            ear: {
                M32: {}
            }
        },
        backpack: {
            studentBackPack: {},
            BL002: {},
        },
    }
};