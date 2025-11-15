import { SceneBackdrops } from '../components/SceneBackdrops';
import { SwitchBar } from '../components/SwitchBar';
import { HarmonyShieldHUD } from '../components/HarmonyShieldHUD';
import { OpenCubesArea } from '../components/OpenCubesArea';

export default function Home() {
  return (
    <main className="min-h-dvh">
      {/* Volumetric background tied to active PoP layer */}
      <SceneBackdrops />

      {/* PoP/PiP/PeP switch bar */}
      <SwitchBar />

      {/* Harmony Shield corruption protocol HUD */}
      <HarmonyShieldHUD />

      {/* Task galaxy (Open Cubes Area) */}
      <OpenCubesArea />

      {/* Future components: ActionConsole, DataRunnerPanel, GestureLayer */}
    </main>
  );
}

