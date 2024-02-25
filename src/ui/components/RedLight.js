import { useMachine } from '@xstate/react';
import { RedLightMachine } from '../../machines/red-light/red-light-machine';
import classNames from 'classnames';


export default function RedLight() {
    const [state, send] = useMachine(RedLightMachine);
    return (<>
    <div className="mt-10">

        <button className="rounded bg-indigo-600 px-2 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => send({type: "POWER_ON"})}>Power On</button>
        <button className="rounded ml-4 bg-indigo-700 px-2 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => send({type: "POWER_OFF"})}>Power Off</button>
        <div className="mt-2">{JSON.stringify(state.value)}</div>

    </div>
    <div className="mt-20">
        <div className={classNames("rounded-full w-20 h-20 mx-auto",
        state.matches("on.red") ? "bg-red-500" : "bg-gray-500",
        state.matches("on.green") ? "bg-green-500" : "bg-gray-500",
        state.matches("on.orange") ? "bg-yellow-500" : "bg-gray-500"
        )}></div>
    </div>
    </>);
}