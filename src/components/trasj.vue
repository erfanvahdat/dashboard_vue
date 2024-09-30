
                <div class=" w-full   mt-2 mx-2 ">
                    <!-- Table with Pulse animation -->
                    <table class="table rounded-lg border border-gray-300 overflow-hidden">

                        <thead>
                            <tr>
                                <th>Ticker</th>
                                <th>Position Side</th>
                                <th>Limit Price</th>
                                <th>Stop Loss Price</th>
                                <th>Take Profit Price</th>
                                <th>Type</th>
                                <th>Risk</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Check if trades array is empty -->
                            <tr v-if="trades.length === 0">
                                <td colspan="8" class="text-center">No trades available</td>
                                <!-- Message when no trades are found -->
                            </tr>

                            <!-- Iterate over trades if not empty -->
                            <tr v-else v-for="(trade, index) in trades" :key="index" class="font-mono">
                                <td>{{ trade.ticker }}</td>
                                <td>{{ trade.positionSide }}</td>
                                <!-- Format numbers to 2 decimal places -->
                                <td>{{ formatNumber(trade.limitPrice) }}</td>
                                <td>{{ formatNumber(trade.slPrice) }}</td>
                                <td>{{ formatNumber(trade.tpPrice) }}</td>
                                <td>{{ trade.type }}</td>
                                <td>{{ formatNumber(trade.risk) }}</td>


                                <td>
                                    <button class="btn btn-primary btn-sm" @click="showBottomRight">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>