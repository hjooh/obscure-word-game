import supabase from "../../../../helper/supabaseClient";
import { useRouter } from 'next/navigation';
import Wrapper from "../../../components/backend/wrapper"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {DateRangePicker} from "@/components/ui/daterangepicker"

export default function NewGame() {
    return (
        <div>
            <div>
                <DateRangePicker>D</DateRangePicker>
            </div>
            <div>
                <Button variant="outline">Randomly Generate For Me!</Button>
            </div>
            <div>
                <Button variant="outline">Save word</Button>
            </div>
            <div>
                Word library
            </div>
        </div>
    );
}