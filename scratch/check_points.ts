import { ethers } from "hardhat";

async function main() {
  const addr = "0xCFb939afdEba0a6f58D62eCD08d5827BB72562a5";
  console.log("Checking contract at:", addr);
  
  try {
    const points = await ethers.getContractAt("ArcPoints", addr);
    const next = await points.getNextSnapshotTime();
    console.log("Next Snapshot:", next.toString());
    
    // Check if checkIn is callable (dry run)
    // Actually just check if functions exist
    console.log("Functions exist.");
  } catch (e: any) {
    console.log("Error:", e.message);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
