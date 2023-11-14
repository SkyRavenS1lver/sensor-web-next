import {get, ref, push, set, limitToLast, query} from 'firebase/database';
import { database } from '../firebaseConfig'; 
import { NextResponse } from "next/server";

export async function GET(request){
    var arrays = []
    const refs = ref(database, 'sensor1');
    await get(query(refs, limitToLast(1))).then((snapshot)=> {
        if(snapshot.exists()){
            arrays = Object.entries(snapshot.val()).map(
                ([Light,PersentaseKelembapanTanah, AirQuality, 
                    RainDrop, H,T, Temperature,Pressure, ApproxAltitude, TimeStamp]) => ({
                        Light,PersentaseKelembapanTanah, AirQuality, 
                    RainDrop, H,T, Temperature,Pressure, ApproxAltitude, TimeStamp
                    }))
        }
    })
    if (arrays !=[]){
        return NextResponse.json({ data: arrays }, { status: 200 })
    }
    else{
        return NextResponse.json({ data: ["Something is wrong"] }, { status: 200 })
    }
}
export async function POST(request){
    const {Light,PersentaseKelembapanTanah, AirQuality, 
        RainDrop, H,T, Temperature,Pressure, ApproxAltitude } = await request.json()
    var messages = "Data tidak berhasil disimpan dengan error: "
    var statusCode = 500
    const refs = ref(database, 'sensor1');
    await set(push(refs), {
            Light : Light,
            PersentaseKelembapanTanah: PersentaseKelembapanTanah,
            AirQuality:AirQuality,
            RainDrop:RainDrop,
            H:H,
            T:T,
            Temperature:Temperature,
            Pressure:Pressure,
            ApproxAltitude: ApproxAltitude,
            TimeStamp:new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })
    }).then(()=>{
        messages = "Data Berhasil Disimpan"
        statusCode = 200
    }).catch(err => {
        messages = messages+err
    });
    return NextResponse.json({ message: messages }, { status: statusCode })


}