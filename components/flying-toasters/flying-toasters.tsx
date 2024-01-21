import { cn } from "~/lib/utils";
import styles from "./flying-toasters.module.scss";

interface FlyingToastersProps {
  className?: string;
}

export default function FlyingToasters({ className }: FlyingToastersProps) {
  return (
    <div className={cn(styles.fade_in, className)}>
      {/* First group of objects */}
      <div className={cn(styles.toaster, styles.t1, styles.p6)}></div>
      <div className={cn(styles.toaster, styles.t3, styles.p7)}></div>
      <div className={cn(styles.toast, styles.tst1, styles.p8)}></div>
      <div className={cn(styles.toaster, styles.t3, styles.p9)}></div>
      <div className={cn(styles.toaster, styles.t1, styles.p11)}></div>
      <div className={cn(styles.toaster, styles.t3, styles.p12)}></div>
      <div className={cn(styles.toaster, styles.t2, styles.p13)}></div>
      <div className={cn(styles.toast, styles.tst3, styles.p14)}></div>
      <div className={cn(styles.toast, styles.tst2, styles.p16)}></div>
      <div className={cn(styles.toaster, styles.t1, styles.p17)}></div>
      <div className={cn(styles.toast, styles.tst2, styles.p19)}></div>
      <div className={cn(styles.toast, styles.tst3, styles.p20)}></div>
      <div className={cn(styles.toaster, styles.t2, styles.p21)}></div>
      <div className={cn(styles.toast, styles.tst1, styles.p24)}></div>
      <div className={cn(styles.toaster, styles.t1, styles.p22)}></div>
      <div className={cn(styles.toast, styles.tst2, styles.p26)}></div>
      <div className={cn(styles.toaster, styles.t1, styles.p28)}></div>
      <div className={cn(styles.toast, styles.tst2, styles.p30)}></div>
      <div className={cn(styles.toaster, styles.t2, styles.p31)}></div>
      <div className={cn(styles.toaster, styles.t1, styles.p32)}></div>
      <div className={cn(styles.toast, styles.tst3, styles.p33)}></div>

      {/* wave 1 of (fr,delayed) objects */}
      <div className={cn(styles.toaster, styles.t4, styles.p27)}></div>
      <div className={cn(styles.toaster, styles.t4, styles.p10)}></div>
      <div className={cn(styles.toaster, styles.t4, styles.p25)}></div>
      <div className={cn(styles.toaster, styles.t4, styles.p29)}></div>

      {/* wave 2 of (delayed) objects */}
      <div className={cn(styles.toaster, styles.t5, styles.p15)}></div>
      <div className={cn(styles.toaster, styles.t5, styles.p18)}></div>
      <div className={cn(styles.toaster, styles.t5, styles.p22)}></div>

      {/* wave 3 of (delayed) objects */}
      <div className={cn(styles.toaster, styles.t6, styles.p6)}></div>
      <div className={cn(styles.toaster, styles.t6, styles.p11)}></div>
      <div className={cn(styles.toaster, styles.t6, styles.p15)}></div>
      <div className={cn(styles.toaster, styles.t6, styles.p19)}></div>
      <div className={cn(styles.toaster, styles.t6, styles.p23)}></div>

      {/* wave 5 of (delayed) objects */}
      <div className={cn(styles.toast, styles.tst4, styles.p10)}></div>
      <div className={cn(styles.toast, styles.tst4, styles.p23)}></div>
      <div className={cn(styles.toast, styles.tst4, styles.p15)}></div>
      <div className={cn(styles.toaster, styles.t7, styles.p7)}></div>
      <div className={cn(styles.toaster, styles.t7, styles.p12)}></div>
      <div className={cn(styles.toaster, styles.t7, styles.p16)}></div>
      <div className={cn(styles.toaster, styles.t7, styles.p20)}></div>
      <div className={cn(styles.toaster, styles.t7, styles.p24)}></div>

      {/* wave 6 of (delayed) objects */}
      <div className={cn(styles.toaster, styles.t8, styles.p8)}></div>
      <div className={cn(styles.toaster, styles.t8, styles.p13)}></div>
      <div className={cn(styles.toaster, styles.t8, styles.p17)}></div>
      <div className={cn(styles.toaster, styles.t8, styles.p25)}></div>

      {/* wave 7 of (delayed) objects */}
      <div className={cn(styles.toaster, styles.t9, styles.p14)}></div>
      <div className={cn(styles.toaster, styles.t9, styles.p18)}></div>
      <div className={cn(styles.toaster, styles.t9, styles.p21)}></div>
      <div className={cn(styles.toaster, styles.t9, styles.p26)}></div>
    </div>
  );
}
