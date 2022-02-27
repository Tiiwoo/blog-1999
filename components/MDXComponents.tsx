import Callout from "@/components/posts/Callout";
import { Dialog, DialogBack } from "@/components/posts/Dialog";
import ImgComponent from "@/components/posts/ImgComponent";
import QuoteComponent from "@/components/posts/QuoteComponent";
import Small from "@/components/posts/Small";
import GithubRepo from "@/components/GithubRepo";
import Step from "@/components/snippets/Step";

// Special Components
import AnimatedFancyCard from "@/components/AnimatedFancyCard";
import WasmRiscvEmu from "@/components/posts/projects/wasm-riscv-emu";

const MDXComponents = {
  img: ImgComponent,
  Quote: QuoteComponent,
  Small,
  Callout,
  Dialog,
  DialogBack,
  Step,
  GithubRepo,
  AnimatedFancyCard, // 《个人博客搭建指北》中使用
  WasmRiscvEmu, // 《WASM RISC-V 模拟器》中使用
};

export default MDXComponents;